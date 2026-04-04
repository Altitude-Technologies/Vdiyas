import { Link } from "react-router-dom";
import logo from "../../assets/images/footer logo.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={`${styles.column} ${styles.brandColumn}`}>
          <div className={styles.brand}>
            <img src={logo} alt="VDIYAS" className={styles.footerLogo} />
            {/* <h3 className={styles.heading}>VDIYAS</h3> */}
          </div>
          <p className={styles.tagline}>Aligning Lives with Cosmic Wisdom</p>
          <p className={styles.text}>
            VisheshaDarshi Institute of Yoga and Astrological Sciences — dedicated
            to the preservation and transmission of authentic Vedic knowledge
            through structured education and practice.
          </p>
        </div>

        <div className={styles.column}>
          <h4 className={styles.subHeading}>Quick Links</h4>
          <ul className={styles.linkList}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.subHeading}>Our Courses</h4>
          <ul className={styles.linkList}>
            <li><Link to="/courses">Astrology Beginners</Link></li>
            <li><Link to="/courses">Astrology Advanced</Link></li>
            <li><Link to="/courses">Nakshatra Astrology</Link></li>
            <li><Link to="/courses">Ashtanga Yoga</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.subHeading}>Connect</h4>
          <ul className={styles.contactList}>
            <li>
              <span className={styles.icon}>&#9993;</span>
              visheshadarshi56@gmail.com
            </li>
            <li>
              <span className={styles.icon}>&#9742;</span>
              +91 74112 12522
            </li>
            <li>
              <span className={styles.icon}>&#9670;</span>
              Bangalore, Karnataka, India
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} VDIYAS. All rights reserved.</p>
        <p className={styles.credit}>
          ❤️ Crafted with Innovation by{" "}
          <a href="https://altitudetechnologies.in" target="_blank" rel="noopener noreferrer" className={styles.creditLink}>
            Altitude Technologies
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
