import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import { CgAbstract } from 'react-icons/cg';
import { Link } from 'react-scroll';
import './HeaderStyles.css'

const Header = () =>  (
    <div className='container'>
      <div className='div-1'>
        <Link activeClass='active' to='home'spy={true} smooth={true}>
          <a style={{ display:"flex", alignItems:"center", color:"#B90E0A", marginBottom:"20px", cursor:"pointer" }}>
            <CgAbstract size="5rem" /> <span>L.Ramos</span>
          </a>
        </Link>
      </div>
      <div className='div-2'>
        <li>
          <Link to="about" spy={true} smooth={true}>
            <a className='nav-link'>About</a>
          </Link>
        </li>
        <li>
          <Link to="projects" spy={true} smooth={true}>
            <a className='nav-link'>Projects</a>
          </Link>
        </li>
        <li>
          <Link to="tech" spy={true} smooth={true}>
            <a className='nav-link'>Technologies</a>
          </Link>
        </li>
      </div>
      <div className='div-3'>
        <a className='social-icons' href="https://github.com/RamosLM10" target="_blank" rel="noreferrer">
          <AiFillGithub size="3.5rem"/>
        </a>
        <a className='social-icons' href="https://facebook.com/luis.m.ramos.9" target="_blank" rel="noreferrer">
          <AiFillFacebook size="3.5rem"/>
        </a>
        <a className='social-icons' href="https://www.linkedin.com/in/luis-ramos-45b2001b8/" target="_blank" rel="noreferrer">
          <AiFillLinkedin size="3.5rem"/>
        </a>
      </div>
    </div>
  );
  
  export default Header;


