import { useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function ScrollToTop() {
  const { pathname, state } = useLocation();
  useEffect(() => {
    if (state?.scrollToForm) return;
    window.scrollTo(0, 0);
  }, [pathname, state]);
  return null;
}
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Courses from "./pages/Courses/Courses";
import Services from "./pages/Services/Services";
import BookAppointment from "./pages/BookAppointment/BookAppointment";
import Testimonials from "./pages/Testimonials/Testimonials";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
