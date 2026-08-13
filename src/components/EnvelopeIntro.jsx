import { motion } from "framer-motion";
import { useState } from "react";

export default function EnvelopeIntro({ onComplete }) {
  const [opened, setOpened] = useState(false);

  const handleTap = () => {
    if (opened) return;

    setOpened(true);

    setTimeout(() => {
      onComplete();
    }, 1000);
  };

  return (
    <motion.div
      className="envelope-intro"
      onClick={handleTap}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="envelope-wrapper">

        <motion.img
          src={`${import.meta.env.BASE_URL}envelope.png`}
          alt="Wedding invitation envelope"
          className="envelope-image"
          animate={
            opened
              ? {
                  y: -100,
                  scale: 1.05,
                  opacity: 0,
                }
              : {
                  y: [0, -6, 0],
                }
          }
          transition={
            opened
              ? {
                  duration: 0.8,
                  ease: "easeInOut",
                }
              : {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />

        {!opened && (
          <motion.div
            className="envelope-hint"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.5,
            }}
          >
            Click on the envelope to open
          </motion.div>
        )}

      </div>
    </motion.div>
  );
}