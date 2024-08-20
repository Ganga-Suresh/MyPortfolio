// Home.js
import React from 'react';
import Projects from './Projects';

const Home = () => {
  return (
    <div className="home-container">
      <h1>My Portfolio</h1>
      <section>
        <h2>Web Development Projects</h2>
        <Projects category="Web Development" />
      </section>
      <section>
        <h2>Design Projects</h2>
        <Projects category="Design" />
      </section>
    </div>
  );
};

export default Home;
