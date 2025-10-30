import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "./ui/card";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Design",
    description: "Modern shopping experience with seamless checkout",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Brand Identity",
    category: "Branding",
    description: "Complete visual identity for startup",
    color: "from-pink-500/20 to-orange-500/20",
  },
  {
    title: "Mobile App",
    category: "UI/UX Design",
    description: "Intuitive fitness tracking application",
    color: "from-green-500/20 to-teal-500/20",
  },
  {
    title: "Dashboard Design",
    category: "Web App",
    description: "Analytics platform for data visualization",
    color: "from-yellow-500/20 to-red-500/20",
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll(".project-card");

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 100,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              end: "top center",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-bold mb-6">
            Featured <span className="text-secondary">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Selected projects that showcase our expertise
          </p>
        </motion.div>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="project-card group relative overflow-hidden rounded-3xl p-8 hover:shadow-[var(--shadow-card)] transition-all duration-500 cursor-pointer border-border/50"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              
              <div className="relative z-10 space-y-4">
                <div className="text-sm text-muted-foreground uppercase tracking-widest">
                  {project.category}
                </div>
                <h3 className="text-4xl font-bold group-hover:translate-x-2 transition-transform duration-500">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="pt-4">
                  <div className="w-12 h-12 rounded-full bg-foreground/10 group-hover:bg-accent group-hover:scale-110 transition-all duration-500 flex items-center justify-center">
                    <span className="text-2xl">→</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
