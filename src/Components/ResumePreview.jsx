import React from "react";
import { motion } from "framer-motion";

// Animated Resume Preview Component
export default function ResumePreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      className="w-[350px] h-[480px] bg-white shadow-xl rounded-2xl border border-gray-200 p-6 cursor-pointer"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="h-full bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-xl font-semibold"
      >
        Resume Preview
      </motion.div>
    </motion.div>
  );
}