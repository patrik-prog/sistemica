
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import FamilyTherapyPage from './pages/FamilyTherapyPage.jsx';
import IndividualTherapyPage from './pages/IndividualTherapyPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import { Toaster } from './components/ui/toaster.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/obiteljska-terapija" element={<FamilyTherapyPage />} />
            <Route path="/individualna-terapija" element={<IndividualTherapyPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/o-meni" element={<AboutPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Toaster />
    </Router>
  );
}

export default App;
