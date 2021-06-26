import React from 'react';
import './ResumeCard.css'

const ResumeCard = () => {
  return (
    <section>
      <section className="resume about-marge">
        <h2 className="resume__title">Working Experiences</h2>

        <article className="resume-content">
          <div className="resume-content__year-map">
            <h2>
              <span>2019 &nbsp;</span>
              <span>To &nbsp;</span>
              Present
            </h2>
          </div>

          <div className="resume-content__desc experience">
            <h2 className="experience__designation">Frontend Developer</h2>
            <p className="experience__company-name">b-cause Bangladesh, ltd.</p>
            <div className="experience__responsibility">
              <p>Responsibilities:</p>
              <ul>
                <li>Frontend part from PSD or Concept</li>
                <li>Responsiveness and Layout Fixing</li>
                <li>Working on ERP project</li>
              </ul>
            </div>
          </div>
        </article>
      </section>

      <section className="resume about-marge">
        <h2 className="resume__title">Educational Qualification</h2>

        <article className="resume-content">
          <div className="resume-content__year-map">
            <h2>
              Start-2018 <br /> Expected-2022
            </h2>
          </div>

          <div className="resume-content__desc experience">
            <h2 className="experience__designation">B.Sc. In CSE</h2>
            <p className="experience__company-name">
              Dhaka International University
            </p>
            <p className="experience__responsibility">
              10th Semester (2 semester remaining)
            </p>
            <p className="experience__responsibility">CGPA: 3.65 (out of 4)</p>
          </div>
        </article>

        <article className="resume-content">
          <div className="resume-content__year-map">
            <h2>
              Start-2013 <br /> Completed-2017
            </h2>
          </div>

          <div className="resume-content__desc experience">
            <h2 className="experience__designation">
              Diploma In Computer Technology
            </h2>
            <p className="experience__company-name">
              Bogura Polytechnic Institute
            </p>
            <p className="experience__responsibility">CGPA: 3.37 (out of 4)</p>
          </div>
        </article>
      </section>
    </section>
  );
};

export default ResumeCard;