import { Link } from "react-router-dom";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    title: "A Truly Memorable Experience",
    initials: "NJ",
    name: "Neeta Jain",
    role: "London, UK",
    paragraphs: [
      "Roopesh Sir is not only a brilliant astrologer but an amazing human being. His unique way of teaching by connecting the various concepts of astrology with ancient Vedic events and mythological stories makes each class a memorable experience. At the same time he is scientific and challenges regressive thinking with pure logic. He has deep insights while making accurate predictions and is kind and approachable at the same time. I look forward to his institute becoming a pioneer and leader in the field of astrology to benefit many in the future. \uD83E\uDD70\uD83D\uDE4F",
    ],
  },
  {
    title: "A Transformative Journey",
    initials: "SU",
    name: "Sundaram",
    role: "Malaysia",
    paragraphs: [
      "It is with deep respect and heartfelt gratitude that I share my experience of learning Vedic astrology under the guidance of Mr. Roopesh. His depth of knowledge in Jyotish Vidya is truly exceptional, seamlessly blending classical wisdom with a clear and practical approach suited for modern learners.",
      "Mr. Roopesh embodies the true spirit of a guru \u2014 patient, insightful, and deeply committed to the growth of his students. He has a remarkable ability to simplify even the most intricate concepts. Whether exploring planetary influences, chart interpretations, or karmic patterns, he ensures that every student develops both clarity and confidence. His teaching style nurtures curiosity, reflection, and a deeper appreciation for the sacred science of astrology.",
      "In his presence, learning becomes not just an intellectual pursuit but a transformative journey.",
    ],
    sanskrit: {
      verse: "\u0938\u0924\u094D\u092F\u0926\u0940\u092A\u0903 \u092A\u094D\u0930\u092C\u0941\u0926\u094D\u0927\u093E\u0924\u094D\u092E\u093E \u091C\u094D\u092F\u094B\u0924\u093F\u0937\u093E\u0902 \u0924\u0924\u094D\u0924\u094D\u0935\u0926\u0930\u094D\u0936\u0915\u0903\u0964\n\u0930\u0942\u092A\u0947\u0936\u0917\u0941\u0930\u0941\u0930\u093F\u0924\u094D\u092F\u0941\u0915\u094D\u0924\u0903 \u0936\u093F\u0937\u094D\u092F\u0939\u0943\u0926\u092F\u0947 \u092A\u094D\u0930\u0915\u093E\u0936\u0915\u0903\u0965",
      transliteration: "Satyad\u012Bpa\u1E25 prabuddh\u0101tm\u0101 jyoti\u1E63\u0101\u1E41 tattvadar\u015Baka\u1E25\nR\u016Bpe\u015Ba-gurur ity ukta\u1E25 \u015Bi\u1E63ya-h\u1E5Bdaye prak\u0101\u015Baka\u1E25",
      meaning: "\u201CHe is a lamp of truth, an awakened soul, a seer of the essence of Jyotish; known as Guru Roopesh, he illuminates the hearts of his students.\u201D",
    },
  },
  {
    title: "Outstanding and Patient Teacher",
    initials: "BC",
    name: "Mahantji Dr. Balliram Chadee",
    role: "Spiritual Leader, The Hanuman Mission \u2014 Canada",
    paragraphs: [
      "Astrology Teacher Roopesh ji, is a wonderful outstanding and patient teacher. He treats his students with respect, attention to detail and thorough care, ensuring full understanding of the lesson, topic and class. He is a kind hearted human being, whose desire is that every student comes to him, leaves better than when they came. I enjoyed taking class with him. It was my pleasure to have met him and his newly wedded wife in Bangalore, on my trip to India in November. Best wishes in your new venture sir.",
    ],
  },
  {
    title: "Truly Blessed to Have You as My Guru",
    initials: "AS",
    name: "Ashwini",
    role: "Mumbai, India",
    paragraphs: [
      "I feel truly blessed to have you as my Guru. You introduced me to the world of astrology \u2014 from planets and houses to understanding their effects on our lives \u2014 and this journey means a lot to me.",
      "What stands out in your teaching is the clarity and logic behind every concept. You always explained the \u201Cwhy\u201D, which made learning meaningful and easy to remember.",
      "Your classes created a strong learning environment where we could openly discuss, question, and grow. No question ever felt wrong, and every doubt was addressed with patience and reasoning.",
      "Despite students being from different places, you connected with each one personally and ensured every query was answered with attention and care.",
      "The sessions became a valuable part of our routine because they were interactive, insightful, and engaging. Each class added something new, explained with practical examples and thoughtful depth.",
      "Your way of linking concepts with Sanatan Dharma and mythology made learning even more interesting and impactful.",
      "Once again, I feel grateful to be your student. \uD83D\uDE4F\u2728",
    ],
  },
  {
    title: "Bridging Astrology and Psychology",
    initials: "VA",
    name: "Varnashree",
    role: "Bangalore, India",
    paragraphs: [
      "Astrology is as vast and deep as the universe itself, yet you have made it simple for us to understand with such clarity and patience. Your method of teaching helps us not only read charts, but truly understand the logic and science behind them, making astrology deeply interesting and easy to absorb.",
      "Coming from the field of psychology and mental health counseling, I have been able to beautifully connect many astrological principles with my own work and understanding of human behavior because of the way you teach with depth and logic. Your guidance has helped me bridge both sciences in a meaningful way.",
      "Beyond academics, your teachings and guidance have also helped me understand and resolve many of my own life challenges with greater awareness and clarity. Learning from you has been transformative both professionally and personally.",
      "Thank you for being not just a teacher, but a true guide. Your institution will undoubtedly shape many sincere students in the years to come.",
      "Wishing you immense success and abundance in this new journey.",
    ],
  },
  {
    title: "A Profoundly Positive Impact",
    initials: "SH",
    name: "Shruthi",
    role: "Canada",
    paragraphs: [
      "Astro Roopesh sir is an outstanding educator. He is of the opinion that the primary objective of astrology is to assist us in becoming better individuals. His guidance and remedies had a profoundly positive impact on my personal life. I am grateful for his mentorship. I wish him all the best.",
    ],
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
                  {t.paragraphs.map((p, j) => (
                    <p className={styles.cardQuote} key={j}>{p}</p>
                  ))}
                  {t.sanskrit && (
                    <div className={styles.sanskritBlock}>
                      <p className={styles.sanskritVerse}>{t.sanskrit.verse}</p>
                      <p className={styles.sanskritTranslit}>{t.sanskrit.transliteration}</p>
                      <p className={styles.sanskritMeaning}>{t.sanskrit.meaning}</p>
                    </div>
                  )}
                </div>
                <div className={styles.cardFooter}>
                  <div className={styles.avatar}>{t.initials}</div>
                  <div className={styles.authorInfo}>
                    <span className={styles.authorName}>{t.name}</span>
                    <span className={styles.role}>{t.role}</span>
                  </div>
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
