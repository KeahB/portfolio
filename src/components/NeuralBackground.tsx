import { useEffect, useRef } from "react";

const NeuralBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current!;
    const container = containerRef.current!;
    const ctx = canvas.getContext("2d")!;

    let width = 0;
    let height = 0;

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width;
      canvas.height = height;
    };

    updateSize();

    const nodes: Node[] = [];
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

    const initNodes = () => {
      nodes.length = 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push(new Node());
      }
    };

    initNodes();

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

    const animationId = requestAnimationFrame(animate);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const resizeObserver = new ResizeObserver(() => {
      updateSize();
      initNodes();
    });

    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="block w-full h-full opacity-60"
      />
    </div>
  );
};

export default NeuralBackground;
