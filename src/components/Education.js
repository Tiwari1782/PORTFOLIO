import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

function Education() {
  const educationData = [
    {
      degree: 'Bachelor of Technology',
      institute: 'CGC UNIVERSITY MOHALI',
      duration: '2024 - 2028',
      cgpa: '9.2 / 10',
      semester: '4th Semester',
      coursework: [
        'Data Structures',
        'Web Development',
        'Database Management',
        'Software Engineering',
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