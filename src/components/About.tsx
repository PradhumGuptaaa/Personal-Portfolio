import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-accent mb-4 italic">The founder</p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground">Pushing Brands since 2023</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="./profile_photo.png"
              alt="Pradhum Gupta"
              className="w-full rounded-3xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Pradhum Gupta</h3>
              <p className="text-accent text-xl">Pradhum, Founder</p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Pradhum is a UI/UX designer from India — Stuttgart who blends function with emotion. 
              As a Framer, Contra, and Shopify Partner, he helps startups and companies create clear 
              interfaces, strong brands, and inspiring digital experiences.
            </p>

            <div className="space-y-4 pt-6">
              {[
                { role: "Founder", company: "Pradhum", period: "2024 → Now" },
                { role: "Framer Partner", company: "Framer", period: "2024 → Now" },
                { role: "Contra Partner", company: "Contra", period: "2024 → Now" },
                { role: "Google Partner", company: "Google", period: "2023 → Now" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="flex justify-between items-center py-4 border-b border-border"
                >
                  <div>
                    <p className="font-semibold text-foreground">{item.role}</p>
                    <p className="text-muted-foreground">{item.company}</p>
                  </div>
                  <p className="text-muted-foreground">{item.period}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
