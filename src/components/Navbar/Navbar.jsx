import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.jpeg";
import styles from "./Navbar.module.css";

const leftLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/services", label: "Services" },
];

const rightLinks = [
  { to: "/testimonials", label: "Testimonials" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Left nav */}
        <ul className={`${styles.navLeft} ${menuOpen ? styles.open : ""}`}>
          {leftLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`${styles.navItem} ${location.pathname === link.to ? styles.active : ""}`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Center logo */}
        <Link to="/" className={styles.logoLink} onClick={closeMenu}>
          <img src={logo} alt="VDIYAS" className={styles.logoImg} />
        </Link>

        {/* Right nav */}
        <ul className={`${styles.navRight} ${menuOpen ? styles.open : ""}`}>
          {rightLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`${styles.navItem} ${location.pathname === link.to ? styles.active : ""}`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/book-appointment" className={styles.ctaBtn} onClick={closeMenu}>
              Book Consultation
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerActive : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
