import './Projects.css'
import React, { useEffect, useState } from "react";
import ProfileImage from "../shared/ProfileImage/ProfileImage";
import ProjectCard from "./ProjectCard/ProjectCard";
import Sidebar from "../shared/Sidebar/Sidebar";
import { useParams } from "react-router";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const {category} = useParams()
  // console.log(category);

  useEffect(() => {
    fetch(`http://localhost:4000/projects/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, [category]);

  return (
    <div className="section-container projects-container">
        <div className="sidebar-container">
          <Sidebar />
        </div>
      <div className="container">
        <div className="projects-content card-columns column-break-inside">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
