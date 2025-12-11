import React from "react";
import { motion } from "framer-motion";

const circles = [
  { size: 150, x: -100, y: -50, delay: 0.2 },
  { size: 200, x: 100, y: 50, delay: 0.4 },
  { size: 120, x: -50, y: 200, delay: 0.6 },
  { size: 180, x: 200, y: -120, delay: 0.8 },
];

export default function BulbBackground() {
  return (
    <div className="absolute top-[50%] left-[50%] rounded-full -translate-[50%] inset-0 overflow-hidden pointer-events-none">
      {circles.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.2, scale: 0.8 }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: c.delay,
            ease: "easeInOut"
          }}
          className="absolute rounded-full bg-pink-900 blur-3xl"
          style={{
            width: c.size,
            height: c.size,
            top: c.y,
            left: c.x,
          }}
        />
      ))}
    </div>
  );
}
