import React from 'react';
import '../Footer/Footer.css';
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <div>
      <footer>
        <div className="left-content">
          <p><strong>M PRAKASH</strong></p>
          <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.</p>
        </div>
        <div className="right-content">
        
          <div className="social-icons">
          {/* <p>Social Media</p> */}
            <SocialIcon className="social-icon" url="https://www.instagram.com" network="instagram" />
            <SocialIcon className="social-icon" url="https://github.com/bunnyprakash" network="github" />
            {/* <SocialIcon className="social-icon" url="https://twitter.com/your_username" network="twitter" /> */}
            <SocialIcon className="social-icon" url="https://www.linkedin.com/feed/" network="linkedin" />
          </div>
        </div>

        <hr />

        <div className="copyright">
          <p>@Copyright2024.Made by Prakash</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
