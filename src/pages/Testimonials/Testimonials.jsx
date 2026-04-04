import { Link } from "react-router-dom";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    title: "From Confusion to Clarity",
    quote: "Before joining, astrology felt complex and confusing. Now I can confidently analyze charts with clarity.",
    initials: "S K",
    role: "Astrology Student",
  },
  {
    title: "Practical Mastery",
    quote: "The teaching approach made everything practical. It's not just learning — it's understanding deeply.",
    initials: "A R",
    role: "Advanced Learner",
  },
  {
    title: "Life Transformation",
    quote: "The integration of yoga and astrology changed how I see life and myself.",
    initials: "P M",
    role: "Yoga & Jyotisha Student",
  },
];

const outcomes = [
  "Strong foundational knowledge",
  "Ability to interpret charts independently",
  "Improved decision-making clarity",
  "Spiritual and personal growth",
];

const Testimonials = () => {
  return (
    <div className={styles.testimonials}>

      {/* ── Header ── */}
      <section className={styles.pageHeader}>
        <div className={styles.stars} />
        <div className={styles.stars2} />
        <div className={styles.headerContent}>
          <p className={styles.headerTag} data-aos="fade-up">Student Stories</p>
          <h1 data-aos="fade-up" data-aos-delay="100">
            Real Transformations, Real Learning
          </h1>
          <p className={styles.headerSub} data-aos="fade-up" data-aos-delay="200">
            Hear from our students and seekers whose lives have been touched by authentic Vedic knowledge
          </p>
          <div className={styles.headerAccent} data-aos="zoom-in" data-aos-delay="300" />
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.testimonialList}>
            {testimonials.map((t, i) => (
              <div
                className={styles.testimonialCard}
                key={i}
                data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={i * 100}
              >
                <div className={styles.cardQuoteMark}>&ldquo;</div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{t.title}</h3>
                  <p className={styles.cardQuote}>{t.quote}</p>
                </div>
                <div className={styles.cardFooter}>
                  <div className={styles.avatar}>{t.initials}</div>
                  <span className={styles.role}>{t.role}</span>
                </div>
                <div className={styles.cardAccent} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Student Outcomes ── */}
      <section className={styles.outcomeBanner}>
        <div className={styles.container}>
          <div className={styles.centerBlock}>
            <span className={styles.labelLight} data-aos="fade-up">Results That Matter</span>
            <h2 className={styles.headingLight} data-aos="fade-up" data-aos-delay="50">Student Outcomes</h2>
            <div className={styles.accentCenter} data-aos="zoom-in" data-aos-delay="100" />
          </div>
          <div className={styles.outcomeGrid}>
            {outcomes.map((o, i) => (
              <div className={styles.outcomeCard} key={i} data-aos="zoom-in" data-aos-delay={i * 120}>
                <span className={styles.outcomeCheck}>&#10003;</span>
                <p className={styles.outcomeText}>{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Community Impact ── */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.communityCard} data-aos="fade-up">
            <div className={styles.communityLeft}>
              <span className={styles.label}>Together We Grow</span>
              <h2 className={styles.communityHeading}>Community Impact</h2>
              <div className={styles.accentLine} />
              <p className={styles.communityText}>
                VDIYAS is not just an institute — it is a growing community of seekers
                committed to learning, practicing, and living consciously.
              </p>
              <Link to="/courses" className={styles.communityBtn}>
                Join Our Community
              </Link>
            </div>
            <div className={styles.communityRight}>
              <div className={styles.impactGrid}>
                <div className={styles.impactItem}>
                  <span className={styles.impactNum}>500+</span>
                  <span className={styles.impactLabel}>Students</span>
                </div>
                <div className={styles.impactItem}>
                  <span className={styles.impactNum}>12+</span>
                  <span className={styles.impactLabel}>Years</span>
                </div>
                <div className={styles.impactItem}>
                  <span className={styles.impactNum}>5</span>
                  <span className={styles.impactLabel}>Courses</span>
                </div>
                <div className={styles.impactItem}>
                  <span className={styles.impactNum}>100%</span>
                  <span className={styles.impactLabel}>Authentic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
