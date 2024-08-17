import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Ganga Suresh</h1>
          <nav>
            <ul>
              <li className="navigation"><Link to="/">Home</Link></li>
              <li className="navigation"><Link to="/about">About</Link></li>
              <li className="navigation"><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer>
          <p>Ganga Suresh</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
