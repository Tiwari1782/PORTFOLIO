import React from 'react';

function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['JavaScript', 'Python', 'HTML', 'CSS', 'SQL']
    },
    {
      category: 'Frontend',
      skills: ['React', 'Tailwind CSS', 'Redux', 'Responsive Design']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'REST APIs', 'Authentication', 'Middleware']
    },
    {
      category: 'Database',
      skills: ['MongoDB', 'MySQL', 'Mongoose', 'Data Modeling']
    },
    {
      category: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Webpack', 'npm']
    },
    {
      category: 'Core Concepts',
      skills: ['Data Structures', 'Algorithms', 'OOP', 'SOLID Principles', 'MVC Architecture']
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skill-badges">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;