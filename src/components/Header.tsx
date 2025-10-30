import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-40 px-6 py-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-foreground"
        >
          Portfolio
        </motion.div>
        
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-card"
        >
          <Menu className="w-6 h-6" />
        </Button>
      </div>
    </motion.header>
  );
};

export default Header;
