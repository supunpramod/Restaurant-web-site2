import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; // Single import


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        {/* <main className="flex-grow">
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/reservations" element={<Reservations />} />
            </Routes>
          </ErrorBoundary>
        </main> */}
        <Footer /> {/* Use the imported Footer component */}
      </div>
    </Router>
  );
}

export default App;