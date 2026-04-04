import founderImg from "../../assets/images/founder.jpeg";
import styles from "./About.module.css";

const expertise = [
  { title: "Parashari System", desc: "Traditional Vedic Astrology with deep scriptural roots" },
  { title: "Nakshatra Interpretation", desc: "Detailed pada-level analysis and karmic patterns" },
  { title: "Prashna Jyotisha", desc: "Practical application of Horary Astrology" },
];

const philosophyPillars = [
  { num: "01", title: "Scriptural Foundation", desc: "Studying original principles from classical texts of Sage Bhrigu, Maharishi Parashara, and Maharishi Jaimini." },
  { num: "02", title: "Analytical Thinking", desc: "Understanding logical application in chart interpretation with clarity and depth." },
  { num: "03", title: "Practical Case Studies", desc: "Real-world examples ensuring students practice Jyotisha with accuracy and responsibility." },
];

const missionPoints = [
  "Preserve and propagate authentic Vedic Astrology and Yoga in its purest form",
  "Teach timeless knowledge from the sacred lineages of Maharishis like Bhrigu, Parashara, and Jaimini",
  "Make divine knowledge accessible, structured, and applicable for modern-day seekers",
  "Nurture students as responsible practitioners of Dharmic sciences",
  "Bring clarity, purpose, and spiritual awareness into people's lives",
  "Create a community of astrologers and yogic practitioners rooted in ethics and authenticity",
  "Bridge the gap between traditional wisdom and contemporary understanding",
  "Establish a Gurukula-based education system with close teacher-student interaction",
  "Develop a center of excellence for research in Jyotisha and Yoga",
  "Become a globally recognized institution rooted in Indian spiritual traditions",
];

const About = () => {
  return (
    <div className={styles.about}>

      {/* ── Header ── */}
      <section className={styles.pageHeader}>
        <div className={styles.stars} />
        <div className={styles.stars2} />
        <div className={styles.headerContent}>
          <p className={styles.headerTag} data-aos="fade-up">Who We Are</p>
          <h1 data-aos="fade-up" data-aos-delay="100">About VDIYAS</h1>
          <p className={styles.headerSub} data-aos="fade-up" data-aos-delay="200">
            Preserving and transmitting authentic Vedic knowledge through
            structured education and practice
          </p>
          <div className={styles.headerAccent} data-aos="zoom-in" data-aos-delay="300" />
        </div>
      </section>

      {/* ── About Institute ── */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.twoCol}>
            <div className={styles.colLeft} data-aos="fade-right">
              <span className={styles.label}>Our Institute</span>
              <h2 className={styles.heading}>Dedicated to Authentic<br />Vedic Learning</h2>
              <div className={styles.accentLine} />
            </div>
            <div className={styles.colRight}>
              <p className={styles.text} data-aos="fade-up">
                VisheshaDarshi Institute of Yoga and Astrological Sciences (VDIYAS)
                is a dedicated center for the systematic study and teaching of
                traditional Vedic knowledge. The institute focuses on authentic
                learning of Jyotisha Shastra based on classical scriptures and
                time-tested methodologies. VDIYAS aims to preserve and propagate the
                wisdom of ancient seers through structured education and practical
                application.
              </p>
              <p className={styles.text} data-aos="fade-up" data-aos-delay="100">
                The institute offers comprehensive courses in Vedic Astrology,
                Nakshatra studies, predictive techniques, and remedial sciences.
                Along with astrology, it also encourages the study of Yogic
                philosophy with Yogic Practices for a holistic lifestyle and Dharmic
                traditions.
              </p>
              <p className={styles.text} data-aos="fade-up" data-aos-delay="200">
                VDIYAS strives to cultivate knowledgeable and responsible astrologers
                who can guide society with wisdom and ethical values. Through lectures,
                workshops, and research-oriented learning, the institute seeks to deepen
                the understanding of cosmic principles governing human life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Founder ── */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={styles.founderSection}>
            <div className={styles.founderLeft} data-aos="fade-right">
              <div className={styles.founderImageWrap}>
                <img src={founderImg} alt="Roopesh S K — Founder" className={styles.founderImg} />
              </div>
              <div className={styles.founderMeta}>
                <span className={styles.metaItem}>12+ Years Practice</span>
                <span className={styles.metaItem}>Founder & Teacher</span>
              </div>
            </div>
            <div className={styles.founderRight} data-aos="fade-left" data-aos-delay="100">
              <span className={styles.label}>The Founder</span>
              <h2 className={styles.heading}>Roopesh S K</h2>
              <div className={styles.accentLine} />
              <p className={styles.text}>
                Roopesh S K is the founder of VDIYAS and a dedicated practitioner
                and teacher of Vedic Astrology. With around 12 years of continuous
                study and practice in Jyotisha Shastra, he has developed a deep
                understanding of classical astrological principles and their
                practical application in modern life.
              </p>
              <p className={styles.text}>
                As a teacher, he emphasizes systematic learning, scriptural
                foundations, and logical interpretation so that students can develop
                clarity and confidence in astrological analysis. His approach
                combines traditional knowledge with practical examples to help
                students understand the deeper principles governing planetary
                influences and karmic patterns.
              </p>
              <p className={styles.text}>
                Through VDIYAS, his vision is to share the wisdom of Jyotisha and
                Yogic traditions with sincerity and to guide students and seekers
                toward knowledge, self-awareness, and dharmic living.
              </p>
              <div className={styles.expertiseCards}>
                {expertise.map((e, i) => (
                  <div className={styles.expertiseCard} key={i} data-aos="fade-up" data-aos-delay={200 + i * 80}>
                    <h4>{e.title}</h4>
                    <p>{e.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Teaching Philosophy ── */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.centerBlock}>
            <span className={styles.label} data-aos="fade-up">How We Teach</span>
            <h2 className={styles.headingCenter} data-aos="fade-up" data-aos-delay="50">Teaching Philosophy</h2>
            <div className={styles.accentLineCenter} data-aos="zoom-in" data-aos-delay="100" />
            <p className={styles.textCenter} data-aos="fade-up" data-aos-delay="150">
              The teaching philosophy at VDIYAS is rooted in the preservation and
              transmission of authentic traditional knowledge, following the
              classical traditions of the revered lineages.
            </p>
          </div>
          <div className={styles.pillarRow}>
            {philosophyPillars.map((p, i) => (
              <div className={styles.pillarCard} key={i} data-aos="fade-up" data-aos-delay={i * 120}>
                <span className={styles.pillarNum}>{p.num}</span>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision ── */}
      <section className={styles.visionBanner}>
        <div className={styles.container}>
          <div className={styles.centerBlock}>
            <span className={styles.labelLight} data-aos="fade-up">Our Purpose</span>
            <h2 className={styles.headingLight} data-aos="fade-up" data-aos-delay="50">
              Spreading Dharmic Jyotisha Knowledge
            </h2>
            <div className={styles.accentLineCenter} data-aos="zoom-in" data-aos-delay="100" />
          </div>
          <p className={styles.visionText} data-aos="fade-up" data-aos-delay="150">
            Our primary vision is to educate society with the authentic principles
            of Jyotisha exactly as described in the classical scriptures. VDIYAS is
            committed to preserving the purity of Dharmic astrological knowledge
            without distortion or commercial misinterpretation. Through systematic
            education, lectures, and research-based learning, we strive to ensure
            that the wisdom of traditional astrology reaches society in its true and
            original form.
          </p>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={styles.centerBlock}>
            <span className={styles.label} data-aos="fade-up">What Drives Us</span>
            <h2 className={styles.headingCenter} data-aos="fade-up" data-aos-delay="50">Our Mission & Vision</h2>
            <div className={styles.accentLineCenter} data-aos="zoom-in" data-aos-delay="100" />
          </div>
          <div className={styles.missionTimeline}>
            {missionPoints.map((point, i) => (
              <div
                className={`${styles.timelineItem} ${i % 2 === 0 ? styles.timelineLeft : styles.timelineRight}`}
                key={i}
                data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={i * 60}
              >
                <div className={styles.timelineDot}><span>{String(i + 1).padStart(2, "0")}</span></div>
                <div className={styles.timelineContent}>
                  <p>{point}</p>
                </div>
              </div>
            ))}
          </div>
          <p className={styles.missionClose} data-aos="fade-up">
            Ultimately, our mission is to serve Dharma by spreading light, wisdom,
            and conscious living across the world.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
