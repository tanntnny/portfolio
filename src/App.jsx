import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Components
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import About from './pages/About'; 
import NotFound from './pages/NotFound'; // Good practice for broken links

// ----------------------------------------------------------------------
// Helper: ScrollToTop
// Resets window scroll position when route changes
// ----------------------------------------------------------------------
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// ----------------------------------------------------------------------
// Main App Component
// ----------------------------------------------------------------------
function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />
        <ScrollToTop />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;