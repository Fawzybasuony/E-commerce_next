import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./Footar.css";

export default function Footart() {
  return (
    <>
      <footer className="footer-section spad">
        <div className="container">
          <div className="newslatter-form">
            <div className="row mx-0">
              <div className="col-lg-12">
                <form action="#">
                  <input type="text" placeholder="Your email address" />
                  <button type="submit">Subscribe to our newsletter</button>
                </form>
              </div>
            </div>
          </div>
          <div className="footer-widget">
            <div className="row mx-0">
              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget">
                  <h4>About us</h4>
                  <ul>
                    <li>About Us</li>
                    <li>Community</li>
                    <li>Jobs</li>
                    <li>Shipping</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget">
                  <h4>Customer Care</h4>
                  <ul>
                    <li>Search</li>
                    <li>Privacy Policy</li>
                    <li>2019 Lookbook</li>
                    <li>Shipping &amp; Delivery</li>
                    <li>Gallery</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget">
                  <h4>Our Services</h4>
                  <ul>
                    <li>Free Shipping</li>
                    <li>Free Returnes</li>
                    <li>Our Franchising</li>
                    <li>Terms and conditions</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget">
                  <h4>Information</h4>
                  <ul>
                    <li>Payment methods</li>
                    <li>Times and shipping costs</li>
                    <li>Product Returns</li>
                    <li>Shipping methods</li>
                    <li>Conformity of the products</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="social-links-warp">
          <div className="container">
            <div className="social-links">
              <a href="" className="instagram">
                <FontAwesomeIcon style={{width:"20px",}} icon={faInstagram} />
                <span>instagram</span>
              </a>

              <a href="" className="facebook">
                <FontAwesomeIcon style={{width:"20px",}} icon={faFacebook} />
                <span>facebook</span>
              </a>
              <a href="" className="twitter">
                <FontAwesomeIcon style={{width:"20px",}} icon={faTwitter} />
                <span>twitter</span>
              </a>
              <a href="" className="youtube">
                <FontAwesomeIcon style={{width:"20px",}} icon={faYoutube} />
                <span>youtube</span>
              </a>
            </div>
          </div>
          <div className="container w-75 text-center pt-5 text-light">
            <p>
              Copyright © All rights reserved
              <a href="https://colorlib.com" target="_blank">
                Colorlib
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
