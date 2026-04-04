import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import founderImg from "../../assets/images/founder.jpeg";
import styles from "./Home.module.css";

const pillars = [
  { num: "01", title: "Authentic Lineage", desc: "Rooted in the traditions of Maharishis — Bhrigu, Parashara, and Jaimini — ensuring purity and depth in every teaching.", icon: "\u2726" },
  { num: "02", title: "Structured Mastery", desc: "A carefully designed curriculum that takes students from foundational understanding to advanced predictive mastery.", icon: "\u25C8" },
  { num: "03", title: "Practical Wisdom", desc: "Real-life case studies and chart analysis ensure knowledge is not theoretical but directly applicable.", icon: "\u25C9" },
  { num: "04", title: "Dharmic Ethics", desc: "We emphasize responsibility, integrity, and reverence for the sacred science of Jyotisha.", icon: "\u25A3" },
];

const courses = [
  { title: "Foundations of Astrology", desc: "Build strong foundations in the science of Jyotisha", tag: "Beginner" },
  { title: "Nakshatra Wisdom", desc: "Understand karmic patterns through the lunar mansions", tag: "Intermediate" },
  { title: "Predictive Mastery", desc: "Master predictive techniques with accuracy and depth", tag: "Advanced" },
  { title: "Yogic Transformation", desc: "Experience inner transformation through Yoga practice", tag: "All Levels" },
];

const visionPoints = [
  { title: "Clarity & Responsibility", desc: "Practice with precision and conscious awareness" },
  { title: "Ethical Values", desc: "Uphold integrity in every consultation and teaching" },
  { title: "Uplift Society", desc: "Use knowledge to guide, heal, and elevate communities" },
];

const stats = [
  { num: 12, suffix: "+", label: "Years Experience" },
  { num: 500, suffix: "+", label: "Students Guided" },
  { num: 5, suffix: "", label: "Expert Courses" },
  { num: 100, suffix: "%", label: "Scripture Based" },
];

/* Animated counter hook */
const useCounter = (end, duration = 2000, startOnView = true) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!startOnView) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started, startOnView]);

  useEffect(() => {
    if (!started) return;
    let frame;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [started, end, duration]);

  return { count, ref };
};

const StatItem = ({ num, suffix, label }) => {
  const { count, ref } = useCounter(num);
  return (
    <div className={styles.statItem} ref={ref}>
      <span className={styles.statNum}>{count}{suffix}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
};

const Home = () => {
  useEffect(() => { AOS.refresh(); }, []);

  return (
    <div className={styles.home}>

      {/* ══════ HERO ══════ */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroGrid} />

        {/* Floating orbs */}
        <div className={styles.heroOrbs}>
          <div className={styles.heroOrb} />
          <div className={styles.heroOrb} />
          <div className={styles.heroOrb} />
        </div>

        {/* Light sweep */}
        <div className={styles.heroLightSweep} />

        {/* Radial pulses */}
        <div className={styles.heroPulse} />
        <div className={styles.heroPulse} />
        <div className={styles.heroPulse} />

        <div className={styles.particles}>
          {[...Array(25)].map((_, i) => (
            <span key={i} className={styles.particle} style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${5 + Math.random() * 90}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }} />
          ))}
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            Aligning Lives with Cosmic Wisdom
          </div>

          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleLine}>Awaken the Power of</span>
            <span className={styles.heroTitleAccent}>Vedic Wisdom</span>
          </h1>

          <p className={styles.heroDesc}>
            A structured, scripture-based journey into authentic Jyotisha
            and Yogic Sciences — designed for the modern seeker.
          </p>

          <div className={styles.heroActions}>
            <Link to="/courses" className={styles.btnPrimary}>
              Start Learning
              <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link to="/book-appointment" className={styles.btnGhost}>
              Book Consultation
            </Link>
          </div>
        </div>

        {/* Stats strip */}
        <div className={styles.statsStrip}>
          {stats.map((s, i) => (
            <StatItem key={i} {...s} />
          ))}
        </div>
      </section>

      {/* ══════ MARQUEE ══════ */}
      <div className={styles.marquee}>
        <div className={styles.marqueeTrack}>
          {[0, 1].map((r) => (
            <div className={styles.marqueeSlide} key={r} aria-hidden={r === 1}>
              {["Vedic Astrology", "Jyotisha Shastra", "Yogic Sciences", "Nakshatra Wisdom", "Karmic Astrology", "Dharmic Living"].map((t) => (
                <span key={t + r}><span className={styles.marqueeIcon}>&#9670;</span>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ══════ ABOUT ══════ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent} data-aos="fade-right">
              <span className={styles.label}>About VDIYAS</span>
              <h2 className={styles.heading}>
                Preserving Authentic <span className={styles.goldText}>Vedic Tradition</span>
              </h2>
              <p className={styles.bodyText}>
                VisheshaDarshi Institute of Yoga and Astrological Sciences stands
                as a dedicated center committed to the preservation and transmission
                of authentic Vedic knowledge, rooted in the timeless teachings of ancient sages.
              </p>
              <p className={styles.bodyText}>
                Unlike superficial interpretations, VDIYAS focuses on pure,
                scripture-based learning — enabling students to grasp the deeper
                principles governing karma, planetary influences, and human life.
              </p>
              <Link to="/about" className={styles.linkArrow}>
                Learn more <span>&#8594;</span>
              </Link>
            </div>
            <div className={styles.aboutBento} data-aos="fade-left" data-aos-delay="150">
              <div className={`${styles.bentoCard} ${styles.bentoImage}`}>
                <img src={founderImg} alt="Roopesh S K — Founder" className={styles.bentoImg} />
                <div className={styles.bentoImgOverlay}>
                  <span className={styles.bentoImgName}>Roopesh S K</span>
                  <span className={styles.bentoImgRole}>Founder &amp; Director</span>
                </div>
              </div>
              <div className={styles.bentoCard}>
                <span className={styles.bentoNum}>12+</span>
                <span className={styles.bentoLabel}>Years of Vedic scholarship and teaching</span>
              </div>
              <div className={`${styles.bentoCard} ${styles.bentoAccent}`}>
                <span className={styles.bentoQuote}>&ldquo;Not just learning — a transformation in perception, awareness, and life direction.&rdquo;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ PILLARS ══════ */}
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.labelLight}>What Sets Us Apart</span>
            <h2 className={styles.headingLight} data-aos="fade-up">
              The VDIYAS <span className={styles.goldText}>Difference</span>
            </h2>
          </div>
          <div className={styles.pillarGrid}>
            {pillars.map((p, i) => (
              <div className={styles.pillarCard} key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className={styles.pillarTop}>
                  <span className={styles.pillarIcon}>{p.icon}</span>
                  <span className={styles.pillarNum}>{p.num}</span>
                </div>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ VISION ══════ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.label}>Our Vision</span>
            <h2 className={styles.heading} data-aos="fade-up">
              Restoring <span className={styles.goldText}>Dharmic Knowledge</span>
            </h2>
            <p className={styles.headerDesc} data-aos="fade-up" data-aos-delay="100">
              Our vision extends beyond education — it is a movement toward
              restoring the authenticity of Dharmic knowledge systems.
            </p>
          </div>
          <div className={styles.visionGrid}>
            {visionPoints.map((v, i) => (
              <div className={styles.visionCard} key={i} data-aos="fade-up" data-aos-delay={150 + i * 100}>
                <div className={styles.visionNum}>0{i + 1}</div>
                <div>
                  <h4 className={styles.visionTitle}>{v.title}</h4>
                  <p className={styles.visionDesc}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ COURSES ══════ */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.coursesTop}>
            <div data-aos="fade-right">
              <span className={styles.label}>Our Programs</span>
              <h2 className={styles.heading}>
                Explore Our <span className={styles.goldText}>Courses</span>
              </h2>
            </div>
            <Link to="/courses" className={styles.btnOutlineDark} data-aos="fade-left">
              View All Courses <span>&#8594;</span>
            </Link>
          </div>
          <div className={styles.courseScroll}>
            {courses.map((c, i) => (
              <div className={styles.courseCard} key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <span className={styles.courseTag}>{c.tag}</span>
                <h4 className={styles.courseTitle}>{c.title}</h4>
                <p className={styles.courseDesc}>{c.desc}</p>
                <Link to="/courses" className={styles.courseLink}>
                  Learn more <span>&#8594;</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ FOUNDER ══════ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.founderBlock} data-aos="fade-up">
            <div className={styles.founderImgCol}>
              <img src={founderImg} alt="Roopesh S K" className={styles.founderPhoto} />
              <div className={styles.founderImgGlow} />
            </div>
            <div className={styles.founderBody}>
              <span className={styles.founderBigQuote}>&ldquo;</span>
              <span className={styles.label}>Founder&rsquo;s Message</span>
              <p className={styles.founderText}>
                Under the guidance of <strong>Roopesh S K</strong>, students
                receive knowledge deeply rooted in tradition, made accessible
                through clarity and structured teaching.
              </p>
              <p className={styles.founderText}>
                With over a decade of dedicated study and practice, his mission is
                to ensure Jyotisha is learned with accuracy, sincerity, and depth.
              </p>
              <div className={styles.founderSig}>
                <span className={styles.founderSigLine} />
                <span>Roopesh S K</span>
                <span className={styles.founderSigRole}>Founder &amp; Director</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGlow} />
        <div className={styles.container}>
          <span className={styles.labelLight} data-aos="fade-up">Begin Today</span>
          <h2 className={styles.ctaTitle} data-aos="fade-up" data-aos-delay="100">
            Step Into a Path of Deeper<br />
            Understanding &amp; Conscious Living
          </h2>
          <div data-aos="zoom-in" data-aos-delay="200">
            <Link to="/courses" className={styles.btnPrimary}>
              Join VDIYAS Today
              <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
