import { useEffect, useRef } from "react";

interface AnimatedBackgroundProps {
  variant?: "hero" | "footer";
}

const AnimatedBackground = ({ variant = "hero" }: AnimatedBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      time += 0.001;
      
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      // Create gradient based on variant
      const gradient = ctx.createRadialGradient(
        width / 2,
        variant === "hero" ? -height * 0.2 : height * 1.2,
        0,
        width / 2,
        variant === "hero" ? -height * 0.2 : height * 1.2,
        width * 0.8
      );

      // Animated gradient colors
      const lightness1 = 95 + Math.sin(time) * 3;
      const lightness2 = 92 + Math.cos(time * 0.7) * 3;

      gradient.addColorStop(0, `hsl(0, 0%, ${lightness1}%)`);
      gradient.addColorStop(1, `hsl(0, 0%, ${lightness2}%)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Add subtle noise effect
      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const noise = (Math.random() - 0.5) * 5;
        data[i] += noise;
        data[i + 1] += noise;
        data[i + 2] += noise;
      }

      ctx.putImageData(imageData, 0, 0);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};

export default AnimatedBackground;
