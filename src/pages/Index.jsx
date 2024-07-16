import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-gradient-to-br from-pink-100 to-pink-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="text-4xl font-bold mb-4 text-pink-800"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Welcome to Your Stylish Pink App
      </motion.h1>
      <motion.p 
        className="text-xl mb-8 text-pink-700"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        This is your starting point. Customize it as you like.
      </motion.p>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white transition-colors duration-300">
          Get Started
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Index;