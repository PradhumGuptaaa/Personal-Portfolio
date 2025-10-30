import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    number: "1",
    title: "Discover",
    description: "We uncover what drives your brand through purpose clarity audience insight and business focus.",
  },
  {
    number: "2",
    title: "Request",
    description: "We analyze your market understand your competitors and identify where you can stand out.",
  },
  {
    number: "3",
    title: "Create",
    description: "We design a distinct identity using voice visuals and story to build emotional connection.",
  },
  {
    number: "4",
    title: "Activate",
    description: "We launch your brand across all channels creating a consistent experience that grows with you.",
  },
];

const services = ["Strategy", "UX Design", "Branding", "Animation", "Research", "Design systems"];

const Process = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll(".process-card");
    
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
          delay: index * 0.1,
        }
      );
    });
  }, []);

  return (
    <section id="process" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-accent mb-4 italic">Hello!</p>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
            We help brands grow with standout design, clear branding, and content that drives results.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-6 py-3 bg-card rounded-full border border-border text-foreground"
              >
                {service}
              </motion.div>
            ))}
          </div>

          <p className="text-sm text-accent mb-4 italic">Our Process, Explained</p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground">Here's how it works</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className="process-card p-8 bg-card rounded-3xl border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="text-6xl font-bold text-accent mb-4">{step.number}</div>
              <h3 className="text-3xl font-bold text-foreground mb-4">{step.title}</h3>
              <p className="text-muted-foreground text-lg">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
