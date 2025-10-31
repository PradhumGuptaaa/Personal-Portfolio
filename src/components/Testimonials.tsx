import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Luprich",
    company: "EyeCatcher",
    image: "https://framerusercontent.com/images/X6BbZTbMzON4di73zb6boGXZqY4.webp?width=1402&height=1698",
    quote: "Working with Denqid was unbelievable. He instantly understood our vision and translated it into a sleek, intuitive Website. The process felt effortless, and the results exceeded our expectations.",
  },
  {
    name: "Jörg Echtermann",
    company: "Puls",
    image: "https://framerusercontent.com/images/NGUnzdCZPVCva9uLIesIEup6J4.jpg?width=526&height=634",
    quote: "Denqid brings clarity to chaos. His design work is not only beautiful but deeply strategic. He helped us rebrand from the ground up, and our audience response has been perfect.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative"
            >
              <div className="mb-8">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-[500px] object-cover rounded-[32px] shadow-lg"
                />
              </div>
              <div className="text-8xl font-bold text-foreground/10 mb-4 leading-none">"</div>
              <p className="text-xl md:text-2xl text-foreground font-normal mb-8 leading-relaxed">
                {testimonial.quote}
              </p>
              <div>
                <p className="text-lg font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-muted-foreground text-base">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
