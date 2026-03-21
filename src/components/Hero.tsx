import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import LiquidEther from "./LiquidEther";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "../assets/pics/keah-hero.png";

export const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Full Stack Prompt Engineer Developer";
  const [index, setIndex] = useState(0);

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

  return (
   <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      {/* Liquid Ether Background */}
{/* Liquid Ether Background */}
<div className="absolute inset-0 -z-20">
  <LiquidEther
    colors={["#f97316", "#fb923c", "#c2410c"]}
    mouseForce={20}
    cursorSize={120}
    isViscous
    viscous={30}
    iterationsViscous={32}
    iterationsPoisson={32}
    resolution={0.5}
    isBounce={false}
    autoDemo
    autoSpeed={0.5}
    autoIntensity={2.2}
    takeoverDuration={0.25}
    autoResumeDelay={3000}
    autoRampDuration={0.6}
    style={{ width: "100%", height: "100%" }}
  />
</div>
      

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      {/* Content */}
      <div className="container-custom px-6 relative z-10">
        <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-20">

          {/* LEFT CONTENT */}
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
              <span className="inline-block w-0.5 h-6 ml-1 bg-orange-500 animate-pulse"></span>
            </p>

            {/* Buttons */}
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

            {/* Social Icons */}
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
                src={heroImage}
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