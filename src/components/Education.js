import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

function Education() {
  const educationData = [
    {
      degree: 'Bachelor of Technology',
      institute: 'Your University Name',
      duration: '2021 - 2025',
      cgpa: '8.5 / 10',
      semester: '6th Semester',
      coursework: [
        'Data Structures',
        'Web Development',
        'Database Management',
        'Software Engineering',
        'Cloud Computing',
        'Machine Learning'
      ]
    }
  ];

  return (
    <section className="education" id="education">
      <div className="education-container">
        <h2 className="section-title">Education</h2>
        
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <div>
              <h3>{edu.degree}</h3>
              <p className="institute">{edu.institute}</p>
              
              <div className="education-details">
                <div className="detail-row">
                  <FontAwesomeIcon icon={faCalendar} />
                  <span>{edu.duration}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">CGPA:</span>
                  <span>{edu.cgpa}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Semester:</span>
                  <span>{edu.semester}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="coursework-title">Relevant Coursework</h4>
              <div className="coursework-badges">
                {edu.coursework.map((course, courseIndex) => (
                  <span key={courseIndex} className="badge">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;