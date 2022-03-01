import React from 'react';
import  projects  from './Projects-Titles';
import './Projects.css';

const Projects = () =>  (
  <section id="projects">
      <h2>Projects</h2>
      <section className="grid-container"> 
        {projects.map(({ id, image, title, description, visit }) => (
          <div className="blog-card" key={id}> 
            <img src={image} />
            <div className="title-content">
              <h3>{title}</h3>
              <hr />
            </div>
            <p>{description}</p>
            <ul className="utility-list">
              <a className="external-links" href={visit} target='_blank' rel="noreferrer">Check it out!</a>
            </ul>
          </div>
        ))}
      </section>    
  </section>
);

export default Projects
