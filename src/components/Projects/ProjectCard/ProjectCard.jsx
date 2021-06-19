import React from 'react';
import './ProjectCard.css'

const ProjectCard = ({project}) => {

  return (
    <div className="project-item">
      <div className="project-item__photo">
        <img src={project.imgUrl} className="img-fluid"/>
      </div>
      <div className="project-item__content">
        <h2 className="project-item__title">{project.title}</h2>
        <p className="project-item__body">
          {/* {project.desc.split(' ').slice(0, 20).join(" ") + '...'} */}
          {project.desc}
        </p>
      </div>
        <a target="_blank" href={project.url} className="p-view-btn">View Demo</a>
    </div>
  );
};

export default ProjectCard;