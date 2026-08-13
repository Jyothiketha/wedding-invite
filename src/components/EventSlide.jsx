import { motion } from "framer-motion";
import { fadeUp } from "../animations";

function EventSlide({
  title,
  subtitle,
  date,
  time,
  venue,
  address,
  mapsUrl,
}) {
  return (
    <section className="event-section">
      <div className="decorative-circle"></div>

      <motion.div
        className="event-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <p className="eyebrow">
          {subtitle}
        </p>

        <h2 className="event-title">
          {title}
        </h2>

        <div className="gold-divider"></div>

        <p className="event-date">
          {date}
        </p>

        <p className="event-time">
          {time}
        </p>

        <h3 className="event-venue">
          {venue}
        </h3>

        <p className="event-address">
          {address}
        </p>

        {mapsUrl && (
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="location-button"
          >
            📍 View Location
          </a>
        )}
      </motion.div>
    </section>
  );
}

export default EventSlide;