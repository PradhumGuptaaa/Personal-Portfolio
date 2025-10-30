import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll(".word");
      
      gsap.fromTo(
        words,
        { opacity: 0, y: 100, rotateX: -90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          delay: 0.3,
        }
      );
    }

    if (heroRef.current) {
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        opacity: 0.3,
        scale: 0.95,
      });
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center px-6 relative"
    >
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block"
        >
          <Badge
            variant="secondary"
            className="px-4 py-2 text-sm rounded-full bg-accent/10 text-accent border-accent/20"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-accent mr-2 animate-pulse" />
            Available to work
          </Badge>
        </motion.div>

        <div ref={titleRef} className="space-y-4">
          <div className="text-7xl md:text-9xl font-bold leading-none overflow-hidden">
            <div className="flex flex-wrap justify-center gap-4">
              <span className="word inline-block">Brands</span>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="inline-block px-6 py-3 bg-card rounded-3xl shadow-[var(--shadow-card)]"
              >
                <span className="word inline-block text-5xl md:text-7xl">✨</span>
              </motion.div>
              <span className="word inline-block text-secondary">Grow</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <span className="word inline-block text-secondary">Fast</span>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="inline-block px-6 py-3 bg-card rounded-3xl shadow-[var(--shadow-card)]"
              >
                <span className="word inline-block text-5xl md:text-7xl">🚀</span>
              </motion.div>
              <span className="word inline-block">With us</span>
            </div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          We don't just make brands pretty — we craft smart design that fuels
          real business growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <Button
            size="lg"
            className="rounded-full px-8 py-6 text-lg bg-foreground text-background hover:bg-foreground/90 shadow-[var(--shadow-soft)] group"
          >
            Book a Meeting
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
