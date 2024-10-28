import React from 'react';
import '../styles/card-project.css';

function CardProject({ img, title, service, description }) {
  return (
    <div className="card-project">
      <img className='img' src={img} alt={`Imagen de ${title}`} />
      <h2>{title}</h2>
      <h3>{service}</h3>
      <p>{description}</p>
    </div>
  );
}

export default CardProject;
