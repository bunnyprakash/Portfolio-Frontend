import React from 'react';
import './Landing.css';
import { SocialIcon } from 'react-social-icons';
import Footer from '../Footer/Footer';
import Onymos from '../../assets/design1.jpg';
import Pricing from '../../assets/design2.jpg';
import Scm from '../../assets/design3.jpg';

const Landing = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    const projectsSection = document.getElementById('contact');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  };
  const onymos1 = Onymos;
  const pricing1 = Pricing;
  const Scm1 = Scm;

  return (
    <><div>
      <div style={{ backgroundImage: 'url(https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg)' }}>
        <div id='content' className="container d-flex justify-content-center align-items-center flex-column">
          {/* need to work on this to disply socila media icons in left */}
          {/* <div className="socialmedia d-flex flex-column align-items-start">
      <SocialIcon className="social-icon" url="https://www.instagram.com/your_username/" network="instagram" />
      <SocialIcon className="social-icon" url="https://www.github.com/your_username/" network="github" />
      <SocialIcon className="social-icon" url="https://twitter.com/your_username" network="twitter" />
      <SocialIcon className="social-icon" url="https://linked.com/your_username" network="linkedin" />
    </div> */}
          <div className="text-content text-center mt-3">
            <h1>HEY, I'M M PRAKASH</h1>
            <div className="description">
              <h4>
                A Frontend focused Web Developer building the Frontend of Websites and
                <br />
                Web Applications that leads to the success of the overall product
              </h4>
            </div>
          </div>
          <div className="button-content text-center mt-1 mb-4">
            <button type="button" className="btn btn-primary btn-lg" onClick={scrollToProjects}>Projects</button>
          </div>
          {/* mouse icon */}
          {/* <div className='home-hero__mouse-scroll-cont'>
            <div className='mouse'></div>
          </div> */}
        </div><br></br>


        {/* About section */}
        <section style={{ backgroundColor: '#fafafa' }} id='about' className='about sec-pad'>
          <h1 style={{ textAlign: 'center' }}>About Me</h1>
          <hr style={{ color: '#7843e9', width: '3%', margin: 'auto', borderRadius: 10, border: '3px solid #7843e9' }} />
          <span className='heading-sec__sub'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</span>
          <div className='about__content'>
            <div className='about__content-main'>
              <h3 className='about__content-title'>Get to know me!</h3>
              <div className='about__content-details'>
                <p className='about__content-details-para'>I'm a <b>Frontend Web Developer</b> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
                <p className='about__content-details-para'>I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a>Linkedin</a> where I post useful content related to Web Development and Programming</p>
                <p className='about__content-details-para'>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
                <button type="button" className="btn btn-primary btn-lg" onClick={scrollToContact}>Contact</button>
              </div>
            </div>



            <div className='about__content-skills' style={{ margin: 0, padding: 0, boxSizing: 'inherit', fontFamily: 'inherit' }}>
              <h3 className='about__content-title'>My Skills</h3>
              <div className='skills'>
                <div className='skills__skill'>HTML</div>
                <div className='skills__skill'>CSS</div>
                <div className='skills__skill'>JavaScript</div>
                <div className='skills__skill'>React</div>
                <div className='skills__skill'>Angular</div>
                <div className='skills__skill'>Basic SQL</div>
                <div className='skills__skill'>Java</div>
                <div className='skills__skill'>TypeScript</div>
                <div className='skills__skill'>Basic Data Structures</div>
              </div>
            </div>
          </div>
        </section>

        {/* project section */}
        <section id='projects' className='projects sec-pad'>
        <h1 style={{ textAlign: 'center' }}>Projects</h1>
        <hr style={{ color: '#7843e9', width: '3%', margin: 'auto', borderRadius: 10, border: '3px solid #7843e9' }} />
        <span className='heading-sec__sub'>Here you will find some of the personal and clients projects that I Have worked on
       </span>
       <div class="container2">
  <div class="row2">
    <div class="col2">
      <div class="card">
        <img src={pricing1} class="card-img-top img-fluid" alt="..." />
        <div class="card-body">
          <p class="card-text">To streamline the pricing process within their Zoho CRM system, a custom JavaScript functionality needs to be developed.
                  This functionality will automatically calculate the pricing based on certain parameters and display the total cost for the selected Omni Clouds products.</p>
        </div>
      </div>
    </div>
    <div class="col2">
      <div class="card">
        <img src={Scm1} class="card-img-top img-fluid" alt="..." />
        <div class="card-body">
          <p class="card-text">Developed the order fulfillment process, ensuring precision and timeliness in shipment distribution. Enhanced scalability  
                and data management through MongoDB integration. 
                Ensured system reliability with rigorous API testing using Postman. Streamlined deployment for improved application  delivery.</p><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
      </div>
    </div>
  </div>
  <div class="row2">
    <div class="col2">
      <div class="card">
        <img src={onymos1} class="card-img-top img-fluid" alt="..." />
        <div class="card-body">
          <p class="card-text"> Managing photos, images and videos in today’s mobile apps is time-consuming and thankless. 
                Media is the toolkit to make it easy.The simplest, fastest way to compress, store and retrieve photos and videos.</p><br></br>
        </div>
      </div>
    </div>
    <div class="col2">
      <div class="card">
        <img src={pricing1} class="card-img-top img-fluid" alt="..." />
        <div class="card-body">
          <p class="card-text">Smerkato is a comprehensive B2B (Business-to-Business) grocery ordering platform designed to streamline the procurement process for clients in the grocery industry. 
              The platform offers a user-friendly interface for businesses to easily place orders for groceries and related products, catering to the diverse needs of retailers, restaurants, and other businesses in the food industry.</p>
        </div>
      </div>
    </div>
  </div>
</div>

        </section>

        {/* contact */}
        <section style={{ backgroundColor: '#fafafa' }} id='contact'>
        <h1 style={{ textAlign: 'center' }}>Contact</h1>
          <hr style={{ color: '#7843e9', width: '3%', margin: 'auto', borderRadius: 10, border: '3px solid #7843e9' }} />
          <span className='heading-sec__sub'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</span>
          <div class="container1">
                  <form action="/">
                    <div class="row">
                      <div class="col-25">
                        <label for="fname">Name</label>
                      </div>
                      <div class="col-75">
                        <input type="text" id="name" name="name" placeholder="Enter Youre  name.."  required/>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-25">
                        <label for="lname">Email</label>
                      </div>
                      <div class="col-75">
                        <input type="email" id="email" name="email" placeholder="Enter Youre Email" required />
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-25">
                        <label for="subject">Message</label>
                      </div>
                      <div class="col-75">
                        <textarea id="message" name="message" placeholder="Write something.." style={{height:200}} required></textarea>
                      </div>
                    </div>
                    <div class="row">
                      <input type="submit" value="Submit" class="btn-submit" />
                    </div>
                  </form>
        </div>


        </section>

      </div>

    </div>
    <br></br>
    <Footer /></>
  );
}

export default Landing;
