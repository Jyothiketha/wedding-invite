import { motion } from "framer-motion";
import { fadeUp } from "../animations";
import { useCountdown } from "../hooks/useCountdown";

function CountdownSlide() {
  const time = useCountdown("2026-12-20T18:00:00");

  return (
    <section className="countdown-section">
      <motion.div
        className="countdown-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <p className="eyebrow">
          THE COUNTDOWN BEGINS
        </p>

        <h2 className="countdown-title">
          Until Forever
        </h2>

        <div className="gold-divider"></div>

        <div className="countdown-grid">
          <div className="countdown-item">
            <span className="countdown-number">
              {time.days}
            </span>
            <span className="countdown-label">
              Days
            </span>
          </div>

          <div className="countdown-item">
            <span className="countdown-number">
              {time.hours}
            </span>
            <span className="countdown-label">
              Hours
            </span>
          </div>

          <div className="countdown-item">
            <span className="countdown-number">
              {time.minutes}
            </span>
            <span className="countdown-label">
              Minutes
            </span>
          </div>

          <div className="countdown-item">
            <span className="countdown-number">
              {time.seconds}
            </span>
            <span className="countdown-label">
              Seconds
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default CountdownSlide;