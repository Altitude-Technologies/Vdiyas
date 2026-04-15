import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Courses.module.css";

const courses = [
  {
    id: "beginners",
    tag: "Beginner",
    icon: "\u2609",
    title: "Astrology Beginners",
    intro: "Introduces the foundational principles of Vedic Astrology in a structured and easy-to-understand manner.",
    points: [
      "Learn about planets, Rashi (zodiac signs), and basic chart interpretation",
      "Designed for absolute beginners with no prior knowledge",
      "Builds a strong base for understanding horoscope analysis",
      "Gain confidence in reading basic birth charts",
    ],
  },
  {
    id: "advanced",
    tag: "Advanced",
    icon: "\u2641",
    title: "Astrology Advanced",
    intro: "Dives deeper into predictive techniques and advanced astrological concepts for professional practice.",
    points: [
      "Explore Dashas, transits, yogas, and divisional charts in detail",
      "Emphasis on practical chart analysis and real-life case studies",
      "Enhances analytical skills for accurate predictions",
      "Ideal for those who want to practice astrology professionally",
    ],
  },
  {
    id: "nakshatra",
    tag: "Specialized",
    icon: "\u2726",
    title: "Nakshatra Astrology",
    intro: "A specialized course focusing on the deeper study of Nakshatras and their significance in prediction.",
    points: [
      "Learn pada-wise interpretations and their connection with Navamsha",
      "Practical applications in prediction and personality analysis",
      "Reveals subtle karmic patterns hidden within Nakshatras",
      "For students who want mastery in Nakshatra-based astrology",
    ],
  },
  {
    id: "yoga",
    tag: "Yoga",
    icon: "\u2638",
    title: "Ashtanga Yoga",
    intro: "Introduces the classical eightfold path of yoga as described in traditional texts.",
    points: [
      "Learn about Yama, Niyama, Asana, Pranayama, and other limbs",
      "Focus on physical discipline with mental and spiritual balance",
      "Suitable for beginners and deeper yogic lifestyle seekers",
      "Promotes holistic well-being and inner harmony",
    ],
  },
  {
    id: "sutras",
    tag: "Yoga & Philosophy",
    icon: "\u0D13",
    title: "Ashtanga Yoga with Patanjali Yoga Sutras",
    intro: "Integrates practical yoga with the philosophical teachings of the Yoga Sutras.",
    points: [
      "Study the sutras along with their real-life applications",
      "Emphasizes meditation, mind control, and spiritual growth",
      "Bridges theory and practice for a complete yogic experience",
      "For those seeking deeper spiritual understanding through yoga",
    ],
  },
];

const Courses = () => {
  const [activeId, setActiveId] = useState(null);

  const toggle = (id) => setActiveId(activeId === id ? null : id);

  return (
    <div className={styles.courses}>

      {/* ── Header ── */}
      <section className={styles.pageHeader}>
        <div className={styles.stars} />
        <div className={styles.stars2} />
        <div className={styles.headerContent}>
          <p className={styles.headerTag} data-aos="fade-up">Learn With Us</p>
          <h1 data-aos="fade-up" data-aos-delay="100">Courses Offered</h1>
          <p className={styles.headerSub} data-aos="fade-up" data-aos-delay="200">
            Structured learning paths from foundational to advanced mastery
          </p>
          <div className={styles.headerAccent} data-aos="zoom-in" data-aos-delay="300" />
        </div>
      </section>

      {/* ── Course Cards ── */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.courseList}>
            {courses.map((course) => (
              <div
                className={`${styles.courseCard} ${activeId === course.id ? styles.active : ""}`}
                key={course.id}
              >
                <div className={styles.cardHeader} onClick={() => toggle(course.id)}>
                  <div className={styles.cardLeft}>
                    <span className={styles.cardIcon}>{course.icon}</span>
                    <div>
                      <span className={styles.cardTag}>{course.tag}</span>
                      <h3 className={styles.cardTitle}>{course.title}</h3>
                    </div>
                  </div>
                  <span className={styles.toggleIcon}>{activeId === course.id ? "\u2212" : "\u002B"}</span>
                </div>
                <div className={styles.cardBody}>
                  <div>
                    <p className={styles.cardIntro}>{course.intro}</p>
                    <ul className={styles.cardPoints}>
                      {course.points.map((pt, j) => (
                        <li key={j}>
                          <span className={styles.pointer} />
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/book-appointment"
                      state={{ scrollToForm: true, course: course.title }}
                      className={styles.cardBtn}
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose ── */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={styles.centerBlock}>
            <span className={styles.label} data-aos="fade-up">Why VDIYAS</span>
            <h2 className={styles.heading} data-aos="fade-up" data-aos-delay="50">What Makes Our Courses Different</h2>
            <div className={styles.divider} data-aos="zoom-in" data-aos-delay="100" />
          </div>
          <div className={styles.whyGrid}>
            {[
              { num: "01", title: "Scripture-Based", desc: "Every course is rooted in classical texts, not modern interpretations" },
              { num: "02", title: "Practical Focus", desc: "Real chart analysis and case studies from day one" },
              { num: "03", title: "Structured Path", desc: "Clear progression from beginner to advanced mastery" },
              { num: "04", title: "Personal Guidance", desc: "Direct mentorship and doubt-clearing with the founder" },
            ].map((item, i) => (
              <div className={styles.whyCard} key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <span className={styles.whyNum}>{item.num}</span>
                <h4 className={styles.whyTitle}>{item.title}</h4>
                <p className={styles.whyDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle} data-aos="fade-up">Ready to begin your learning journey?</h2>
          <p className={styles.ctaSub} data-aos="fade-up" data-aos-delay="100">
            Take the first step toward authentic Vedic knowledge
          </p>
          <div data-aos="zoom-in" data-aos-delay="200">
            <Link
              to="/book-appointment"
              state={{ scrollToForm: true }}
              className={styles.ctaBtn}
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
