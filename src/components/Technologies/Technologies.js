import React from 'react'
import { DiHtml5, DiReact, DiCss3, DiJavascript1, DiGithubBadge} from 'react-icons/di';
import './Technologies.css'

const Technologies = () => (
  <section id="tech">
      <h2 className='section-title'>Technologies</h2>
        <p className='section-text'>
        I have learned and played around strictly with Front-End technologies but eventually would like to learn also about 
        the Back-End.
        </p>
      <ul>
        <li>
          <DiHtml5 size="4rem" color="maroon" />
            <div className='list-container'>
              <h4 className='list-title'>HTML</h4>
            </div>
        </li>
        <li>
          <DiCss3 size="4rem" color="maroon" />
            <div className='list-container'>
              <h4 className='list-title'>CSS</h4>
            </div>
        </li>
        <li>
          <DiJavascript1 size="4rem" color="maroon" />
            <div className='list-container'>
              <h4 className='list-title'>JavaScript</h4>
            </div>
        </li>
        <li>
          <DiReact size="4rem" color="maroon" />
            <div className='list-container'>
              <h4 className='list-title'>React</h4>
            </div>
        </li>
        <li>
          <DiGithubBadge size="4rem" color="maroon" />
            <div className='list-container'>
              <h4 className='list-title'>GitHub</h4>
            </div>
        </li>
      </ul>
  </section>
);

export default Technologies
