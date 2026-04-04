import { Link } from "react-router-dom";
import styles from "./Blog.module.css";

const categories = [
  {
    icon: "\u2609",
    title: "Astrology",
    color: "#C8962E",
    topics: ["How planets influence life", "Understanding Dashas and timing", "Chart reading techniques"],
  },
  {
    icon: "\u2726",
    title: "Nakshatras",
    color: "#6B21A8",
    topics: ["Hidden karmic patterns", "Personality insights", "Predictive depth"],
  },
  {
    icon: "\u2638",
    title: "Yoga & Conscious Living",
    color: "#3B1272",
    topics: ["Daily practices for balance", "Mind control and awareness", "Spiritual discipline"],
  },
];

const articles = [
  { title: "Why Accurate Birth Time Matters in Astrology", tag: "Astrology" },
  { title: "Understanding Karma Through Nakshatras", tag: "Nakshatras" },
  { title: "How Yoga Supports Mental Clarity", tag: "Yoga" },
  { title: "Common Mistakes in Horoscope Reading", tag: "Astrology" },
];

const Blog = () => {
  return (
    <div className={styles.blog}>

      {/* ── Header ── */}
      <section className={styles.pageHeader}>
        <div className={styles.stars} />
        <div className={styles.stars2} />
        <div className={styles.headerContent}>
          <p className={styles.headerTag} data-aos="fade-up">Knowledge Hub</p>
          <h1 data-aos="fade-up" data-aos-delay="100">A Space for Deeper Understanding</h1>
          <p className={styles.headerSub} data-aos="fade-up" data-aos-delay="200">
            Simplifying complex Vedic concepts and making them accessible for everyone
          </p>
          <div className={styles.headerAccent} data-aos="zoom-in" data-aos-delay="300" />
        </div>
      </section>

      {/* ── Categories ── */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.centerBlock}>
            <span className={styles.label} data-aos="fade-up">Explore Topics</span>
            <h2 className={styles.heading} data-aos="fade-up" data-aos-delay="50">What You Will Learn</h2>
            <div className={styles.dividerCenter} data-aos="zoom-in" data-aos-delay="100" />
          </div>
          <div className={styles.catGrid}>
            {categories.map((cat, i) => (
              <div className={styles.catCard} key={i} data-aos="fade-up" data-aos-delay={i * 120}>
                <div className={styles.catTop}>
                  <span className={styles.catIcon} style={{ borderColor: cat.color }}>{cat.icon}</span>
                  <h3 className={styles.catTitle}>{cat.title}</h3>
                </div>
                <ul className={styles.catTopics}>
                  {cat.topics.map((topic, j) => (
                    <li key={j}>
                      <span className={styles.pointer} />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Articles ── */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={styles.centerBlock}>
            <span className={styles.label} data-aos="fade-up">Read & Learn</span>
            <h2 className={styles.heading} data-aos="fade-up" data-aos-delay="50">Featured Articles</h2>
            <div className={styles.dividerCenter} data-aos="zoom-in" data-aos-delay="100" />
          </div>
          <div className={styles.articleGrid}>
            {articles.map((article, i) => (
              <div className={styles.articleCard} key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className={styles.articleInner}>
                  <span className={styles.articleTag}>{article.tag}</span>
                  <h4 className={styles.articleTitle}>{article.title}</h4>
                  <span className={styles.articleStatus}>Coming Soon</span>
                </div>
                <div className={styles.articleNum}>{String(i + 1).padStart(2, "0")}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaInner} data-aos="fade-up">
            <h2 className={styles.ctaTitle}>Explore Knowledge</h2>
            <div className={styles.ctaDivider} />
            <h2 className={styles.ctaTitle}>Expand Awareness</h2>
          </div>
          <p className={styles.ctaSub} data-aos="fade-up" data-aos-delay="100">
            Begin your journey into the timeless wisdom of Vedic sciences
          </p>
          <div data-aos="zoom-in" data-aos-delay="200">
            <Link to="/courses" className={styles.ctaBtn}>Start Learning</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
