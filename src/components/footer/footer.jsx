import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__social">
          <a
            href="www.linkedin.com/in/lenin-correa-b496b5272"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-linkedin"></i>
          </a>
          <a
            href="https://github.com/x-jirox"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-github"></i>
          </a>
          <a
            href="https://www.instagram.com/ss.jiro/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-instagram-alt"></i>
          </a>
        </div>
        <span className="footer__copy">&#169; All rigths reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
