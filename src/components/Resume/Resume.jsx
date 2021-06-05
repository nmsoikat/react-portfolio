import React, { useState } from "react";
import ProfileImage from "../shared/ProfileImage/ProfileImage";
import "./Resume.css";
import ResumeCard from "./ResumeCard/ResumeCard";
import Sidebar from "../shared/Sidebar/Sidebar";

const Resume = () => {

  const [expand, setExpand] = useState(false);

  const menuBtn = (event) => {
    const mBtn = event.target;
    if (mBtn.classList.contains("mBtn")) {
      mBtn.classList.toggle("open");
    } else if (mBtn.parentElement.classList.contains("mBtn")) {
      mBtn.parentElement.classList.toggle("open");
    }

    if (
      mBtn.classList.contains("open") ||
      mBtn.parentElement.classList.contains("open")
    ) {
      setExpand(true);
    } else {
      setExpand(false);
    }
  };


  return (
    <div className="section-container resume-container">
      <div
        className={expand ? "sidebar-container expand" : "sidebar-container"}
      >
        <button className="mBtn" onClick={(event) => menuBtn(event)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
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
