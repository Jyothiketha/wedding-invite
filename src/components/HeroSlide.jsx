import { motion } from "framer-motion";
import { fadeUp } from "../animations";

function HeroSlide() {
  return (
    <section className="hero-section">
      <img
        src="/couple.jpg"
        alt="The couple"
        className="hero-image"
      />

      <div className="hero-overlay"></div>

      <motion.div
        className="hero-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <p className="eyebrow">
          WE ARE GETTING MARRIED
        </p>

        <div className="hero-names">
          Bride
          <span className="hero-ampersand">&</span>
          Groom
        </div>

        <p className="hero-date">
          20 · DECEMBER · 2026
        </p>
      </motion.div>

      <div className="scroll-indicator">
        Scroll to explore
      </div>
    </section>
  );
}

export default HeroSlide;