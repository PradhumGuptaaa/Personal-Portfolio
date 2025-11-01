import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-[radial-gradient(ellipse_80%_50%_at_50%_120%,hsl(0,0%,92%),hsl(0,0%,98%))]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm text-accent mb-4 italic">Available to work</p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Feel free to contact me if having any questions. I'm available for new projects or just for chatting.
          </p>
          <Button variant="cta" size="lg" className="rounded-full px-8 py-6 text-lg mb-16">
            Book a Meeting →
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-12 border-t border-border"
        >
          <p className="text-muted-foreground mb-4">© Pradhum, 2025</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              Legal Notice
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              Privacy Policy
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
