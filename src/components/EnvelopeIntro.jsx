import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function EnvelopeIntro({ onComplete }) {
  const [opened, setOpened] = useState(false);

  const handleTap = () => {
    if (opened) return;

    setOpened(true);

    setTimeout(() => {
      onComplete();
    }, 1200);
  };

  return (
    <motion.div
      onClick={handleTap}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "fixed",
        inset: 0,
        background: "#f5ece0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 9999,
      }}
    >
      <motion.img
        src="/envelope.png"
        alt="Wedding invitation envelope"
        animate={
          opened
            ? {
                y: 80,
                opacity: 0,
                scale: 1.05,
              }
            : {
                y: [0, -8, 0],
              }
        }
        transition={
          opened
            ? {
                duration: 0.8,
                ease: "easeInOut",
              }
            : {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
        style={{
          width: "min(80vw, 360px)",
          height: "auto",
          objectFit: "contain",
        }}
      />
    </motion.div>
  );
}