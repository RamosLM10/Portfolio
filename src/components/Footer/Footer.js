import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import './FooterStyles.css';

const Footer = () => (
      <div>
        <section className='footer-wrapper'>
          <ul className='link-list'>
            <div className='link-column'>
              <h4>Call</h4>
              <a className='transition personal-link' href="+61415989243">+61415989243</a>
            </div>
            <div className='link-column'>
              <h4>Email</h4>
              <a className='transition personal-link' href="mailto:luismiguel.ramos@yahoo.com.au">luismiguel.ramos@yahoo.com.au</a>
            </div>
          </ul>
          <div className='social-icons-container'>
              <div className='company-container'>
                <p>"If you do not believe you can do it then you have no chance at all."
                  <br/>-Arsene Wenger
                </p>
              </div>
          <div className='social-container'>
          <a className='social-icons' href="https://github.com/RamosLM10" target="_blank">
          <AiFillGithub size="3.5rem"/>
        </a>
        <a className='social-icons' href="https://facebook.com/luis.m.ramos.9" target="_blank">
          <AiFillFacebook size="3.5rem"/>
        </a>
        <a className='social-icons' href="https://www.linkedin.com/in/luis-ramos-45b2001b8/" target="_blank">
          <AiFillLinkedin size="3.5rem"/>
        </a>
          </div> 
        </div>
        </section>
      </div>
    );
  
  
  export default Footer;