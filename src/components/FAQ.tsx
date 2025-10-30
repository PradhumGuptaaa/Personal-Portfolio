import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqs = [
  {
    question: "Difference between a hour and a branding?",
    answer: "The Branding is ongoing and flexible — ideal for Startups design needs. Hour Rates are one-time, fixed-scope engagements for quicker goals like a rebrand or landing Page.",
  },
  {
    question: "What types of design do you handle?",
    answer: "Webdesign, Branding, product UI, landing pages, E-Commerce shop, brand assets, decks, social media visuals, anything digital that needs to look and feel sharp.",
  },
  {
    question: "How many requests can I make?",
    answer: "As many as you like, with a branding subscription, you can queue unlimited requests, and they'll be handled one at a time in priority order.",
  },
  {
    question: "Do you offer development too?",
    answer: "Denqid focuses on design and Branding only, but all deliverables are dev-ready.",
  },
  {
    question: "Can I pause the Branding?",
    answer: "Yes — you can pause anytime and resume when you're ready. Unused days roll over. But theres no Money-back guarantee.",
  },
  {
    question: "How fast is the turnaround?",
    answer: "Most hour-requests are delivered within 1–2 business days. Larger tasks may take longer, but you'll always be kept in the loop.",
  },
  {
    question: "What tools do you use?",
    answer: "Figma for design, Framer for Development, Notion for task management, and Google or E-Mail for async communication.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-accent mb-4 italic">FAQ</p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground">Your Questions, Answered</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border px-6"
              >
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center bg-card rounded-3xl p-8 border border-border"
        >
          <img
            src="https://framerusercontent.com/images/tdMAAOQgGX3QdjxUBBKpxISknGU.png?width=1024&height=1024"
            alt="Contact"
            className="w-32 h-32 mx-auto mb-6 rounded-2xl"
          />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Have more questions? Book a free discovery call
          </h3>
          <p className="text-muted-foreground mb-2">Or, email me at</p>
          <a href="mailto:hello@denqid.com" className="text-accent hover:underline text-lg">
            hello@denqid.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
