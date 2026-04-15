import { Link } from "react-router-dom";
import styles from "./Services.module.css";
import astroImg from "../../assets/images/Vedic Astrology.jpg";
import nakshatraImg from "../../assets/images/Nakshatra Specialization.jpg";
import yogaImg from "../../assets/images/Yogic Science & Lifestyle Training.jpg";
import consultImg from "../../assets/images/Personal Consultations.jpg";
import workshopImg from "../../assets/images/Workshops & Advanced Learning.jpg";

const services = [
  {
    // icon: "\u2609",
    title: "Vedic Astrology Education",
    desc: "A complete learning journey designed to transform beginners into confident practitioners.",
    points: ["Fundamentals of planets and signs", "Chart interpretation", "Predictive systems like Dashas and transits", "Advanced techniques and divisional charts"],
    image: astroImg,
  },
  {
    // icon: "\u2726",
    title: "Nakshatra Specialization",
    desc: "Nakshatras reveal the subtle karmic blueprint of life. This program enables students to:",
    points: ["Understand pada-level interpretations", "Decode personality patterns", "Predict events with higher precision"],
    image: nakshatraImg,
  },
  {
    // icon: "\u2638",
    title: "Yogic Science & Lifestyle Training",
    desc: "Beyond physical postures, this program introduces:",
    points: ["The eightfold path of Ashtanga Yoga", "Breath control and discipline", "Meditation and mental clarity", "Spiritual growth through practice"],
    image: yogaImg,
  },
  {
    // icon: "\u2B50",
    title: "Personal Consultations",
    desc: "Receive guidance rooted in classical Jyotisha. Each consultation is conducted with responsibility and authenticity.",
    points: ["Career direction", "Relationship insights", "Life challenges and timing", "Spiritual growth"],
    image: consultImg,
  },
  {
    // icon: "\u269B",
    title: "Workshops & Advanced Learning",
    desc: "Interactive sessions designed to deepen knowledge through:",
    points: ["Case study analysis", "Live chart discussions", "Research-based insights"],
    image: workshopImg,
  },
];

const methodology = [
  { num: "01", title: "Scriptural Foundation", desc: "Learning from classical texts", icon: "\u{1F4DC}" },
  { num: "02", title: "Logical Understanding", desc: "Clear interpretation of principles", icon: "\u{1F9E0}" },
  { num: "03", title: "Practical Application", desc: "Real-world chart analysis", icon: "\u{1F52D}" },
];

const Services = () => {
  return (
    <div className={styles.services}>

      {/* ── Header ── */}
      <section className={styles.pageHeader}>
        <div className={styles.stars} />
        <div className={styles.stars2} />
        <div className={styles.headerContent}>
          <p className={styles.headerTag} data-aos="fade-up">What We Offer</p>
          <h1 data-aos="fade-up" data-aos-delay="100">Our Core Services</h1>
          <p className={styles.headerSub} data-aos="fade-up" data-aos-delay="200">
            Comprehensive offerings rooted in authentic Vedic tradition
          </p>
          <div className={styles.headerAccent} data-aos="zoom-in" data-aos-delay="300" />
        </div>
      </section>

      {/* ── Services — Alternating layout ── */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          {services.map((service, i) => (
            <div
              className={`${styles.serviceRow} ${i % 2 !== 0 ? styles.reverse : ""}`}
              key={i}
            >
              {/* Visual side */}
              <div
                className={styles.serviceVisual}
                data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
              >
                <div className={styles.visualCard}>
                  {service.image && (
                    <img src={service.image} alt={service.title} className={styles.visualImg} />
                  )}
                  <div className={styles.visualOverlay} />
                  <span className={styles.visualIcon}>{service.icon}</span>
                  <span className={styles.visualLabel}>{service.title}</span>
                </div>
              </div>

              {/* Content side */}
              <div
                className={styles.serviceContent}
                data-aos={i % 2 === 0 ? "fade-left" : "fade-right"}
                data-aos-delay="100"
              >
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.desc}</p>
                <ul className={styles.servicePoints}>
                  {service.points.map((pt, j) => (
                    <li key={j}>
                      <span className={styles.pointer} />
                      {pt}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/book-appointment"
                  state={{ scrollToForm: true, course: service.title }}
                  className={styles.serviceLink}
                >
                  Get Started &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Methodology ── */}
      <section className={styles.methodSection}>
        <div className={styles.container}>
          <div className={styles.centerBlock}>
            <span className={styles.labelLight} data-aos="fade-up">How We Teach</span>
            <h2 className={styles.headingLight} data-aos="fade-up" data-aos-delay="50">
              Our Teaching Methodology
            </h2>
            <div className={styles.accentCenter} data-aos="zoom-in" data-aos-delay="100" />
            <p className={styles.methodIntro} data-aos="fade-up" data-aos-delay="150">
              We follow a three-layer approach
            </p>
          </div>

          <div className={styles.methodRow}>
            {methodology.map((m, i) => (
              <div className={styles.methodCard} key={i} data-aos="zoom-in" data-aos-delay={i * 150}>
                <div className={styles.methodTop}>
                  <span className={styles.methodNum}>{m.num}</span>
                </div>
                <h4 className={styles.methodTitle}>{m.title}</h4>
                <p className={styles.methodDesc}>{m.desc}</p>
                {i < methodology.length - 1 && <div className={styles.methodConnector} />}
              </div>
            ))}
          </div>

          <p className={styles.methodNote} data-aos="fade-up" data-aos-delay="500">
            This ensures students develop true mastery, not memorization.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.ctaCard} data-aos="fade-up">
            <div className={styles.ctaLeft}>
              <h2 className={styles.ctaTitle}>Ready to experience our services?</h2>
              <p className={styles.ctaSub}>
                Take the first step toward authentic Vedic knowledge and personal transformation.
              </p>
            </div>
            <Link to="/book-appointment" state={{ scrollToForm: true }} className={styles.ctaBtn}>Book a Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
