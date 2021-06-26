import './Projects.css'
import React, { useEffect, useState } from "react";
import ProfileImage from "../shared/ProfileImage/ProfileImage";
import ProjectCard from "./ProjectCard/ProjectCard";
import Sidebar from "../shared/Sidebar/Sidebar";
import { useParams } from "react-router";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const { category } = useParams()

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
  // console.log(category);

  useEffect(() => {
    fetch(`https://tranquil-earth-86948.herokuapp.com/projects/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, [category]);

  return (
    <div className="section-container projects-container">
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
        <div className="projects-content">
          {projects.length > 0 ?
            <div className="projects-wrap">
              {projects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div> :
            <div class="spinner-border text-success" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Projects;
