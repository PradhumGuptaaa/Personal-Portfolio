import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const menuItems = [
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-background/80 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-foreground"
          >
            Denqid
          </motion.div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-full hover:bg-card"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 w-full md:w-96 h-screen bg-card z-40 shadow-2xl"
          >
            <nav className="flex flex-col items-start justify-center h-full px-12 space-y-8">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl md:text-5xl font-bold text-foreground hover:text-accent transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
