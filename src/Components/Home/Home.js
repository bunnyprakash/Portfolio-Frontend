// Home.js

import React from 'react';
import './Home.css';
// import image from './assets/image.jpg';
// import Landing from './Components/Landing/Landing';
import Profile from '../../assets/Image.jpg';

const Home = () => {
  // const imageUrl = 'https://th.bing.com/th/id/OIP.Gfp0lwE6h7139625a-r3aAHaHa?rs=1&pid=ImgDetMain';
  const imageUrl = Profile;


  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:' #FFFFF7'}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={imageUrl} alt="Logo" width="50" height="54" className="d-inline-block align-text-top" />
            M Prakash
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Home;
