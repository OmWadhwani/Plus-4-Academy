import { useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import JoinUsForm from "./components/JoinUsForm";
import Footer from "./components/Footer";
import FloatingJoinButton from "./components/FloatingJoinButton";
import JoinUsFormModal from "./components/JoinUsFormModal";
import RefundPolicyPage from "./components/RefundPolicyPage";
import ContactUsPage from "./components/ContactUsPage";
import Courses from "./components/Courses";
import CourseDetail from "./components/CourseDetail";
import Cart from "./components/Cart";
import "./styles.css";

// Home Page Component
function HomePage() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const galleryRef = useRef(null);
  const reviewsRef = useRef(null);
  const joinRef = useRef(null);
  const contactRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (ref) => {
    setMobileMenuOpen(false);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <TopBar />
      <Navbar
        onHomeClick={() => scrollToSection(homeRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onGalleryClick={() => scrollToSection(galleryRef)}
        onReviewsClick={() => scrollToSection(reviewsRef)}
        onJoinClick={() => scrollToSection(joinRef)}
        onContactClick={() => scrollToSection(contactRef)}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <FloatingJoinButton onJoinClick={() => scrollToSection(joinRef)} />
      <JoinUsFormModal />

      <section ref={homeRef}>
        <Hero onEnquireClick={() => scrollToSection(joinRef)} />
      </section>

      <section ref={aboutRef}>
        <About />
      </section>

      <section ref={galleryRef}>
        <Gallery />
      </section>

      <section ref={reviewsRef}>
        <Reviews />
      </section>

      <section ref={joinRef}>
        <JoinUsForm />
      </section>

      <section ref={contactRef}>
        <Footer />
      </section>
    </>
  );
}

// Main App with Router
export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/RefundandCancellation"
              element={<RefundPolicyPage />}
            />
            <Route path="/ContactUs" element={<ContactUsPage />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:courseId" element={<CourseDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}
