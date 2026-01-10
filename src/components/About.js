import React from 'react';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-card">
          <p>
            I'm a passionate Computer Science student with a strong focus on full-stack web development. 
            I love solving complex problems and building intuitive, user-friendly applications that make a real impact.
          </p>
          
          <p>
            My journey in tech started with a curiosity about how things work, which led me to dive deep into 
            web development. I specialize in the MERN stack (MongoDB, Express, React, Node. js) and am constantly 
            learning new technologies to stay ahead in this ever-evolving field.
          </p>
          
          <p>
            Beyond coding, I'm a problem-solver at heart, a lifelong learner, and someone who believes that clean code 
            and great user experiences go hand-in-hand. When I'm not coding, you'll find me exploring new technologies, 
            contributing to open-source projects, or sharing my knowledge with others.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;