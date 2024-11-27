import React from 'react';
import './styles/footer.css'; // Assuming you have a CSS file for footer styles
import fb from "./icons/facebook.webp";
import insta from "./icons/insta.webp";
import twit from "./icons/twit.webp";

const Footer = () => {
  return (
    <footer className="footer text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5>DRUDS Media Productions</h5>
            <p>
              Our mission is to provide top-notch creative services that bring
              your media vision to life with a blend of artistic expertise and
              technical proficiency.
            </p>
          </div>
        
          <div className="col text-center">
            <h5>Follow Us</h5>
            <ul className="social-icons">
              <li>
                <a href="#" className="text-white">
                  <img src={fb} alt="Facebook" className="social-logo" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/drudsindia/" target="_blank" className="text-white">
                  <img src={insta} alt="Instagram" className="social-logo" />
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  <img src={twit} alt="Twitter" className="social-logo" />
                </a>
              </li>
            </ul>
          </div>

          <div className="col">
            <h5>Contact Us</h5>
            <p>Email: drudsindia@gmail.com</p>
            <p>Phone: +91 7020 179</p>
          </div>
        </div>
      </div>

      <div className="text-center row">
          <p>&copy; 2024 DRUDS Media Productions. All Rights Reserved.</p>
      </div>  
    </footer>
  );
};

export default Footer;
