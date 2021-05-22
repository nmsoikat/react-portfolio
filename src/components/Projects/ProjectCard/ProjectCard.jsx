import React from 'react';
import './ProjectCard.css'

const ProjectCard = ({project}) => {
  return (
    <div className="project-item card">
      <div className="project-item__photo">
        <img src={project.imgUrl} className="card-img-top" />
      </div>
      <div className="project-item__content card-body">
        <h2 className="project-item__title">{project.title}</h2>
        <p className="project-item__body">
          {project.desc}
        </p>
        <a target="_blank" href={project.url} className="btn btn-primary">View Demo</a>
      </div>
    </div>
  );
};

export default ProjectCard;