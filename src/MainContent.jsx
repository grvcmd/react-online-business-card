import React from 'react';
import './MainContent.css'
import pfp from './assets/pfp.jpeg'
import linkedin_logo from './assets/linkedin.png'
import mail_logo from './assets/Mail.png'
import github_logo from './assets/github_small.png'

export default function MainContent() {
  return (
    <>
      <div className='container'>
        <div className='img-container'>
          <img src={pfp} alt='Me' className='main-img'></img>
        </div>
        <div className='sub-container'>
          <h2 className="name">Ken Valverde</h2>
          <h4 className="role">Full Stack Developer</h4>
          <div className="connect">
            <a className='mail' href="mailto:ken.valverde@yahoo.com"><img src={mail_logo} alt="mail" /> Email</a>
            <a className='linkedin' href="https://www.linkedin.com/in/gervinkenvalverde/" target='_blank'><img src={linkedin_logo} alt="" />LinkedIn</a>
          </div>
          <div className="about">
            <h3>About</h3>
            <p>Computer Information Systems graduate (December 2022) seeking positions as a full-time Software Developer or Web Developer. </p>
            <p>Passionate about full-stack development as I love being involved in the comprehensive process of creating a product.</p>
          </div>
          <div className="interest">
            <h3>Interests</h3>
            <p>Programming, agile practices, full-stack technologies, and RDB/NoSQL management.</p>
          </div>
        </div>
        <div className="footer">
          <a href="https://github.com/grvcmd" target="_blank"><img src={github_logo} alt="github" /></a>
        </div>
      </div>
    </>
  )
}