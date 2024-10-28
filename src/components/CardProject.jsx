import React from 'react';
import '../styles/card-project.css';

function CardProject({ img, title, service, description }) {
  return (
    <div className="card-project">
      <img src={img} alt={title} />
      <div className="card-project-content">
        <h2 className="card-project-title">{title}</h2>
        <span className="card-project-service">{service}</span>
        <p className="card-project-description">{description}</p>
        </div>
    </div>
  );
}

export default CardProject;
