import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import CaseStudyDetails from './pages/CaseStudyDetails';
import Contact from './pages/Contact';
import Service from './pages/Service';
import ServiceDetails from './pages/ServiceDetails';
import Partner from './pages/Partner';
import Client from './pages/Client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import HomeFive from './pages/HomeFive';
import AutoScrollToTop from "./components/AutoScrollToTop";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: 'ease',
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeFive />} />
        <Route exact path="/services" element={<Service />} />
        <Route exact path="/services/:slug" element={<ServiceDetails />} />
        <Route exact path="/partners" element={<Partner />} />
        <Route exact path="/clients" element={<Client />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/blog-details" element={<BlogDetails />} />
        <Route exact path="/about" element={<About />} />
        <Route
          exact
          path="/case-study-details"
          element={<CaseStudyDetails />}
        />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <AutoScrollToTop />
      <ScrollToTop smooth color="#246BFD" />
    </BrowserRouter>
  );
}

export default App;
