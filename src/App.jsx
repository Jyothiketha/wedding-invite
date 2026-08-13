import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const weddingDate = new Date("2026-08-26T22:16:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = weddingDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
      );

      const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      );

      const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
      );

      const seconds = Math.floor(
        (difference / 1000) % 60
      );

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToEvents = () => {
    document
      .getElementById("events")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <div className="wedding-page">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="hero-section">

        {/* COUPLE IMAGE */}
        <img
          src={`${import.meta.env.BASE_URL}couple.png`}
          alt="Manikanta and Chandrakala"
          className="hero-image"
        />

        {/* DARK OVERLAY */}
        <div className="hero-overlay"></div>

        {/* HERO CONTENT */}
        <div className="hero-content">

          {/* TOP DECORATION */}
          <div className="hero-decoration">

            <span className="decor-line"></span>

            <span className="decor-symbol">
              ❧
            </span>

            <span className="decor-star">
              ✦
            </span>

            <span className="decor-symbol">
              ❧
            </span>

            <span className="decor-line"></span>

          </div>

          {/* SMALL HEADING */}
          <p className="eyebrow">
            WE ARE GETTING MARRIED
          </p>

          {/* NAMES */}
          <div className="name-block">

            <h1>
              Manikanta
            </h1>

            {/* AMPERSAND */}
            <div className="ampersand-row">

              <span className="side-symbol">
                ❧
              </span>

              <span className="ampersand">
                &amp;
              </span>

              <span className="side-symbol">
                ❧
              </span>

            </div>

            <h1>
              Chandrakala
            </h1>

          </div>

          {/* GOLD LINE */}
          <div className="gold-line">

            <span></span>

            <span className="gold-diamond">
              ◆
            </span>

            <span></span>

          </div>

          {/* WEDDING DATE */}
          <p className="wedding-date">
            26 · AUGUST · 2026
          </p>

          {/* SCROLL BUTTON */}
          <button
            className="scroll-button"
            onClick={scrollToEvents}
          >

            <span className="arrow">
              ↓
            </span>

            <span>
              SCROLL TO EXPLORE
            </span>

          </button>

        </div>

      </section>


      {/* =====================================================
          COUNTDOWN
      ===================================================== */}

      <section className="countdown-section">

        <p className="section-eyebrow">
          THE COUNTDOWN BEGINS
        </p>

        <h2>
          Until
          <br />
          Forever
        </h2>

        <div className="small-gold-line"></div>

        <div className="countdown">

          <div className="count-item">
            <span>
              {timeLeft.days}
            </span>

            <small>
              DAYS
            </small>
          </div>

          <div className="count-item">
            <span>
              {timeLeft.hours}
            </span>

            <small>
              HOURS
            </small>
          </div>

          <div className="count-item">
            <span>
              {timeLeft.minutes}
            </span>

            <small>
              MINUTES
            </small>
          </div>

          <div className="count-item">
            <span>
              {timeLeft.seconds}
            </span>

            <small>
              SECONDS
            </small>
          </div>

        </div>

      </section>


      {/* =====================================================
          EVENTS
      ===================================================== */}

      <section
        id="events"
        className="events-section"
      >

        <p className="section-eyebrow">
          JOIN US IN CELEBRATION
        </p>

        <h2>
          Wedding Celebrations
        </h2>

        <div className="small-gold-line"></div>


        {/* GROOM MAKEOVER */}

        <div className="event-card">

          <p className="event-date">
            23 · AUGUST · 2026
          </p>

          <h3>
            Groom Makeover
          </h3>

          <p className="event-time">
            Throughout the day
          </p>

          <p className="event-venue">
            📍 Pedapalla
          </p>

        </div>


        {/* SANGEETH */}

        <div className="event-card">

          <p className="event-date">
            24 · AUGUST · 2026
          </p>

          <h3>
            Sangeeth
          </h3>

          <p className="event-time">
            Evening
          </p>

          <p className="event-venue">
            📍 Pedapalla
          </p>

        </div>


        {/* BONALU */}

        <div className="event-card">

          <p className="event-date">
            25 · AUGUST · 2026
          </p>

          <h3>
            Bonalu &amp; Lunch
          </h3>

          <p className="event-time">
            12:00 PM
          </p>

          <p className="event-venue">
            📍 Near SBPBK Function Hall,
            <br />
            Pedapalla
          </p>

        </div>


        {/* MARRIAGE */}

        <div className="event-card wedding-card">

          <p className="event-date">
            26 · AUGUST · 2026
          </p>

          <h3>
            Marriage
          </h3>

          <p className="event-time">
            10:16 PM
          </p>

          <p className="event-venue">
            📍 Sri Venkateswara Swamy Temple
            <br />
            Kalavapuvvu Center, Mandapeta
          </p>

        </div>


        {/* RECEPTION */}

        <div className="event-card">

          <p className="event-date">
            30 · AUGUST · 2026
          </p>

          <h3>
            Reception
          </h3>

          <p className="event-time">
            12:00 PM onwards
          </p>

          <p className="event-venue">
            📍 Rajavomangi Mandalam,
            <br />
            Ookurti
          </p>

        </div>

      </section>


      {/* =====================================================
          THANK YOU
      ===================================================== */}

      <section className="thank-you-section">

        <p className="section-eyebrow">
          THANK YOU
        </p>

        <h2>
          We can't wait
          <br />
          to celebrate with you
        </h2>

        <p className="thank-you-text">
          Your presence and blessings mean the world to us
          as we begin this beautiful journey together.
        </p>

        <div className="thank-you-names">
          Manikanta &amp; Chandrakala
        </div>

        <div className="heart">
          ♥
        </div>

      </section>

    </div>
  );
}

export default App;