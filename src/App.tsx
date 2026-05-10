import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/layout/SmoothScroll';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import LoadingScreen from './components/ui/LoadingScreen';

export default function App() {
  return (
    <Router>
      <LoadingScreen />
      <SmoothScroll>
        <div className="min-h-screen flex flex-col bg-slate text-light">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  );
}
