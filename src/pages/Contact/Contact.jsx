import { useEffect, useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const closePopup = () => setStatus({ type: "", message: "" });

  useEffect(() => {
    if (!status.message) return;
    const onKey = (e) => { if (e.key === "Escape") closePopup(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [status.message]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await fetch("/api/email.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          source: "Contact Form – vdiyas.in",
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setStatus({ type: "success", message: data.message || "Message sent successfully!" });
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.contact}>

      {/* ── Header ── */}
      <section className={styles.pageHeader}>
        <div className={styles.stars} />
        <div className={styles.stars2} />
        <div className={styles.headerContent}>
          <p className={styles.headerTag} data-aos="fade-up">Contact</p>
          <h1 data-aos="fade-up" data-aos-delay="100">Connect With Us</h1>
          <p className={styles.headerSub} data-aos="fade-up" data-aos-delay="200">
            Whether you are a beginner, a seeker, or someone looking for guidance
            — we are here to support your journey.
          </p>
          <div className={styles.headerAccent} data-aos="zoom-in" data-aos-delay="300" />
        </div>
      </section>

      {/* ── Reach Us + Form ── */}
      <section className={styles.mainSection}>
        <div className={styles.container}>
          <div className={styles.layout}>

            {/* Left — Reach Us */}
            <div className={styles.reachUs} data-aos="fade-right">
              <span className={styles.label}>Reach Us</span>
              <h2 className={styles.heading}>Get In Touch</h2>
              <div className={styles.accentLine} />

              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>{"\u25C8"}</div>
                  <div>
                    <h4>Location</h4>
                    <p>Bangalore, Karnataka, India</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>{"\u260E"}</div>
                  <div>
                    <h4>Phone</h4>
                    <p>+91 74112 12522</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>{"\u2709"}</div>
                  <div>
                    <h4>Email</h4>
                    <p>visheshadarshi56@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className={styles.queryBlock}>
                <p className={styles.queryText}>We welcome your queries regarding:</p>
                <div className={styles.queryTags}>
                  <span>Courses</span>
                  <span>Consultations</span>
                  <span>Workshops</span>
                  <span>General guidance</span>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className={styles.formCard} data-aos="fade-left" data-aos-delay="100">
              <span className={styles.label}>Write To Us</span>
              <h2 className={styles.heading}>Send Us a Message</h2>
              <div className={styles.accentLine} />
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.field}>
                  <label>Full Name *</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
                </div>
                <div className={styles.field}>
                  <label>Email *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@email.com" />
                </div>
                <div className={styles.field}>
                  <label>Subject *</label>
                  <select name="subject" value={form.subject} onChange={handleChange} required>
                    <option value="">Select topic</option>
                    <option value="Courses">Courses</option>
                    <option value="Consultations">Consultations</option>
                    <option value="Workshops">Workshops</option>
                    <option value="General guidance">General guidance</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label>Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Your message..." />
                </div>
                <button type="submit" className={styles.submitBtn} disabled={submitting}>
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Closing ── */}
      <section className={styles.closingSection}>
        <div className={styles.closingStars} />
        <div className={styles.closingOrb1} />
        <div className={styles.closingOrb2} />
        <div className={styles.closingContent} data-aos="fade-up">
          <div className={styles.closingLine} />
          <p className={styles.closingText}>
            Begin your journey toward clarity, wisdom, and conscious living with
          </p>
          <span className={styles.closingBrand}>VDIYAS</span>
          <div className={styles.closingLine} />
        </div>
      </section>

      {status.message && (
        <div
          className={styles.modalOverlay}
          onClick={closePopup}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`${styles.modalCard} ${
              status.type === "success" ? styles.modalSuccess : styles.modalError
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalIcon}>
              {status.type === "success" ? "✓" : "⚠"}
            </div>
            <h3 className={styles.modalTitle}>
              {status.type === "success" ? "Message Sent" : "Something Went Wrong"}
            </h3>
            <p className={styles.modalText}>{status.message}</p>
            <button type="button" className={styles.modalBtn} onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
