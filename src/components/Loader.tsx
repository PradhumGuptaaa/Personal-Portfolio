import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      >
        <div className="text-center space-y-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="text-8xl font-bold text-foreground">
              {count}
              <span className="text-secondary">%</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${count}%` }}
            className="h-1 bg-accent mx-auto max-w-xs rounded-full"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-sm tracking-widest uppercase"
          >
            Loading Experience
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
