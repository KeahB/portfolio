import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "AI Prompt Engineer";
  const [index, setIndex] = useState(0);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouse = useRef({ x: 0, y: 0 });

  /* Typing Effect */
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  /* Neural Network Background */
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const nodes: any[] = [];
    const NODE_COUNT = 80;
    const MAX_DISTANCE = 150;

    class Node {
      x: number;
      y: number;
      vx: number;
      vy: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
      }

      move() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2.5, 0, Math.PI * 2);

        const glow = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          6
        );

        glow.addColorStop(0, "rgba(255,140,40,1)");
        glow.addColorStop(1, "rgba(255,140,40,0)");

        ctx.fillStyle = glow;
        ctx.fill();
      }
    }

    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push(new Node());
    }

    function drawConnections() {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);

            ctx.strokeStyle = `rgba(255,120,40,${1 - dist / MAX_DISTANCE})`;
            ctx.lineWidth = 1;
            ctx.shadowColor = "#ff6a00";
            ctx.shadowBlur = 6;
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        }

        /* Mouse interaction */
        const dx = nodes[i].x - mouse.current.x;
        const dy = nodes[i].y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 180) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(mouse.current.x, mouse.current.y);

          ctx.strokeStyle = "rgba(255,180,80,0.6)";
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      nodes.forEach((node) => {
        node.move();
        node.draw();
      });

      drawConnections();

      requestAnimationFrame(animate);
    }

    animate();

    /* Mouse movement */
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    window.addEventListener("resize", () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      {/* Neural Network Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 -z-10" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 -z-10"></div>

      {/* Content */}
      <div className="container-custom px-6">
        <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-20">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left order-2 lg:order-1"
          >
            <p className="text-orange-400 font-medium tracking-widest uppercase text-sm">
              Welcome to my creative space
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white">
              I'm <span className="text-orange-500">Keah Bareno</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 h-8">
              A passionate{" "}
              <span className="text-white font-medium">{text}</span>
              <span className="inline-block w-0.5 h-6 ml-1 bg-orange-500 animate-pulse" />
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-6">
              <a
                href="#projects"
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 transition text-white rounded-full flex items-center gap-2"
              >
                View My Work <ArrowRight size={20} />
              </a>

              <a
                href="#contact"
                className="px-8 py-4 border border-gray-600 text-white rounded-full hover:bg-white/10 transition"
              >
                Contact Me
              </a>
            </div>

            <div className="flex justify-center lg:justify-start gap-6 pt-10">
              {[
                { icon: Github, href: "https://github.com/KeahB" },
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: Mail, href: "mailto:barenokcy@gmail.com" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-black/40 rounded-xl text-gray-300 hover:text-orange-500 hover:scale-110 transition"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            <div className="w-80 md:w-[420px] lg:w-[540px]">
              <img
                src="/pics/keah-hero.png"
                alt="Keah Bareno"
                className="w-full object-contain drop-shadow-[0_0_40px_rgba(255,120,40,0.5)]"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};