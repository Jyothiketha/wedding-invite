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
  const isMarriage =
    title?.toLowerCase().includes("marriage");

  return (
    <section
      className={`event-section ${
        isMarriage ? "marriage-event" : ""
      }`}
    >
      <motion.div
        className="event-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        {subtitle && (
          <p className="eyebrow event-subtitle">
            {subtitle}
          </p>
        )}

        <p className="event-date">
          {date}
        </p>

        <h2 className="event-title">
          {title}
        </h2>

        <div className="gold-divider"></div>

        {time && (
          <p className="event-time">
            {time}
          </p>
        )}

        {venue && (
          <h3 className="event-venue">
            📍 {venue}
          </h3>
        )}

        {address && (
          <p className="event-address">
            {address}
          </p>
        )}

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