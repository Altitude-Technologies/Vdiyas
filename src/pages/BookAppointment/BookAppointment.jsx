import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import styles from "./BookAppointment.module.css";

const uniquePoints = [
  "Based strictly on classical Jyotisha principles",
  "No fear-based predictions or exaggerations",
  "Focus on clarity, guidance, and responsibility",
  "Practical solutions aligned with Dharma",
];

const guidanceAreas = [
  { icon: "\u{1F4BC}", text: "Career & professional direction" },
  { icon: "\u{1F491}", text: "Marriage & relationships" },
  { icon: "\u{1F4B0}", text: "Financial stability" },
  { icon: "\u{23F3}", text: "Timing of important life events" },
  { icon: "\u{1F9D8}", text: "Spiritual growth and self-awareness" },
];

const steps = [
  { num: "01", title: "Birth Details", desc: "Fill in your date, time and place of birth" },
  { num: "02", title: "Consultation Type", desc: "Choose the area of guidance you need" },
  { num: "03", title: "Confirm Slot", desc: "Pick a date and confirm your booking" },
  { num: "04", title: "Receive Guidance", desc: "Get personalized Vedic astrological insight" },
];

const BookAppointment = () => {
  const location = useLocation();
  const formRef = useRef(null);

  const [form, setForm] = useState({
    name: "", email: "", phone: "", dob: "", tob: "", pob: "",
    course: location.state?.course || "",
    type: "", preferredDate: "", message: "",
  });

  useEffect(() => {
    if (location.state?.scrollToForm && formRef.current) {
      const timer = setTimeout(() => {
        formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted successfully! We will contact you shortly.");
  };

  return (
    <div className={styles.booking}>

      {/* ── Header ── */}
      <section className={styles.pageHeader}>
        <div className={styles.stars} />
        <div className={styles.stars2} />
        <div className={styles.headerContent}>
          <p className={styles.headerTag} data-aos="fade-up">Book a Session</p>
          <h1 data-aos="fade-up" data-aos-delay="100">
            Seek Clarity Through Vedic Insight
          </h1>
          <p className={styles.headerSub} data-aos="fade-up" data-aos-delay="200">
            Life often presents uncertainties — in career, relationships, health, and purpose.
            Vedic Astrology offers a profound system to understand these patterns and make informed decisions.
          </p>
          <div className={styles.headerAccent} data-aos="zoom-in" data-aos-delay="300" />
        </div>
      </section>

      {/* ── What Makes Us Unique + Guidance ── */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>

            {/* Unique card */}
            <div className={styles.infoCard} data-aos="fade-right">
              <span className={styles.cardLabel}>Why Us</span>
              <h2 className={styles.cardHeading}>What Makes Our Consultation Unique</h2>
              <div className={styles.accentLine} />
              <ul className={styles.checkList}>
                {uniquePoints.map((pt, i) => (
                  <li key={i}>
                    <span className={styles.checkIcon}>&#10003;</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>

            {/* Guidance card */}
            <div className={styles.infoCard} data-aos="fade-left" data-aos-delay="100">
              <span className={styles.cardLabel}>We Guide You</span>
              <h2 className={styles.cardHeading}>Areas of Guidance</h2>
              <div className={styles.accentLine} />
              <div className={styles.guidanceList}>
                {guidanceAreas.map((g, i) => (
                  <div className={styles.guidanceItem} key={i}>
                    <span className={styles.guidanceIcon}>{g.icon}</span>
                    <span>{g.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process Steps ── */}
      <section className={styles.sectionWhite}>
        <div className={styles.container}>
          <div className={styles.centerBlock}>
            <span className={styles.label} data-aos="fade-up">Simple Process</span>
            <h2 className={styles.heading} data-aos="fade-up" data-aos-delay="50">How It Works</h2>
            <div className={styles.dividerCenter} data-aos="zoom-in" data-aos-delay="100" />
          </div>
          <div className={styles.stepsRow}>
            {steps.map((step, i) => (
              <div className={styles.stepCard} key={i} data-aos="fade-up" data-aos-delay={i * 120}>
                <div className={styles.stepNumWrap}>
                  <span className={styles.stepNum}>{step.num}</span>
                </div>
                <h4 className={styles.stepTitle}>{step.title}</h4>
                <p className={styles.stepDesc}>{step.desc}</p>
                {i < steps.length - 1 && <div className={styles.stepArrow}>&rarr;</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking Form ── */}
      <section ref={formRef} className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formLayout}>

            {/* Left — info */}
            <div className={styles.formInfo} data-aos="fade-right">
              <span className={styles.labelLight}>Get Started</span>
              <h2 className={styles.formInfoHeading}>Book Your Consultation Today</h2>
              <div className={styles.accentLineLight} />
              <p className={styles.formInfoText}>
                Fill in your details and we will get back to you to confirm your personalized
                consultation session rooted in classical Jyotisha.
              </p>
              <div className={styles.formFeatures}>
                <div className={styles.formFeature}>
                  <span className={styles.featureDot} />
                  <span>100% Confidential</span>
                </div>
                <div className={styles.formFeature}>
                  <span className={styles.featureDot} />
                  <span>Scripture-based analysis</span>
                </div>
                <div className={styles.formFeature}>
                  <span className={styles.featureDot} />
                  <span>Personalized guidance</span>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className={styles.formCard} data-aos="fade-left" data-aos-delay="100">
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label>Full Name *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
                  </div>
                  <div className={styles.field}>
                    <label>Email *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@email.com" />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label>Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div className={styles.field}>
                    <label>Place of Birth</label>
                    <input type="text" name="pob" value={form.pob} onChange={handleChange} placeholder="City, State" />
                  </div>
                </div>
                {form.course && (
                  <div className={styles.field}>
                    <label>Course / Program Interested In</label>
                    <input type="text" name="course" value={form.course} onChange={handleChange} placeholder="Course name" />
                  </div>
                )}
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label>Date of Birth *</label>
                    <input type="date" name="dob" value={form.dob} onChange={handleChange} required />
                  </div>
                  <div className={styles.field}>
                    <label>Time of Birth</label>
                    <input type="time" name="tob" value={form.tob} onChange={handleChange} />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label>Consultation Type *</label>
                    <select name="type" value={form.type} onChange={handleChange} required>
                      <option value="">Select type</option>
                      <option value="general">General Reading</option>
                      <option value="career">Career Guidance</option>
                      <option value="relationship">Relationship</option>
                      <option value="spiritual">Spiritual Growth</option>
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label>Preferred Date</label>
                    <input type="date" name="preferredDate" value={form.preferredDate} onChange={handleChange} />
                  </div>
                </div>
                <div className={styles.field}>
                  <label>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Anything specific you'd like guidance on..." />
                </div>
                <button type="submit" className={styles.submitBtn}>Book Consultation</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookAppointment;
