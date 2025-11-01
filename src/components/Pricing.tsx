import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

const features = [
  "Online communication",
  "Unlimited design",
  "Fast turnaround",
  "Fixed hour rate",
  "Flexible scope",
  "Stop anytime",
];

const qualities = [
  "Senior-level quality",
  "Systems thinking",
  "Developer-friendly",
  "Clear process",
  "On-brand, every time",
  "Reliable partner",
  "Fast execution",
  "Thoughtful feedback",
  "Smooth handoff",
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-accent mb-4 italic">Pricing</p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground">Fixed Price, Zero Limits</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-xl"
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-2">Design</h3>
                <h3 className="text-3xl font-bold text-foreground">Branding</h3>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-foreground">40€</p>
                <p className="text-muted-foreground">per Hour</p>
              </div>
            </div>

            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm text-accent">Available to work</span>
              </div>
              <Button size="lg" className="w-full rounded-full text-lg">
                Book a Meeting →
              </Button>
            </div>

            <div>
              <h4 className="text-xl font-bold text-foreground mb-6">What's included</h4>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <img
                src="https://framerusercontent.com/images/M0nlyD7MQakYIdAII3IFSvvzr4E.jpg?width=2050&height=1154"
                alt="Testimonial"
                className="w-full rounded-3xl shadow-lg mb-6"
              />
              <p className="text-xl font-bold text-foreground mb-2">Pradhum Gupta</p>
              <p className="text-muted-foreground mb-4">FeuersteinCars</p>
              <p className="text-lg text-foreground leading-relaxed italic">
                "Pradhum created a website for us that exceeded all expectations. Professional, creative, and reliable. 
                No one could have done it better. He is simply the best designer in the World."
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {qualities.map((quality, index) => (
                <motion.div
                  key={quality}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-4 bg-card rounded-2xl border border-border text-center"
                >
                  <p className="text-sm text-foreground font-medium">{quality}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
