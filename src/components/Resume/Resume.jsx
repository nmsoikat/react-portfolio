import React from "react";
import ProfileImage from "../shared/ProfileImage/ProfileImage";
import "./Resume.css";
import ResumeCard from "./ResumeCard/ResumeCard";
import Sidebar from "../shared/Sidebar/Sidebar";

const Resume = () => {
  return (
    <div className="section-container resume-container">
        <div className="sidebar-container">
          <Sidebar />
        </div>
      <div className="container">
        <div className="resume-content-portion">
          <ResumeCard />
        </div>
      </div>
    </div>
  );
};

export default Resume;
