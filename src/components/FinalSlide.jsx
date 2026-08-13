import { motion } from "framer-motion";
import { fadeUp } from "../animations";

function FinalSlide() {
  return (
    <section className="final-section">
      <motion.div
        className="final-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
      >
        <p className="eyebrow">
          THANK YOU
        </p>

        <h2>
          We can't wait
          <br />
          to celebrate with you
        </h2>

        <p className="final-message">
          Your presence and blessings mean
          the world to us as we begin this
          beautiful journey together.
        </p>

        <div className="final-names">
          Bride & Groom
        </div>

        <div className="final-heart">
          ♥
        </div>
      </motion.div>
    </section>
  );
}

export default FinalSlide;