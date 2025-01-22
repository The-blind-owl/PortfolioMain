import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Mahan</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="#https://www.instagram.com/mah__5n/"
            className="home__social-icon"
            target="
     _blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="#https://api.telegram.com/send?phone=989370878283&text=Hello"
            className="home__social-icon"
            target="
     _blank"
          >
            <i className="bx bxl-telegram"></i>
          </a>

          <a
            href="#https://github.com/The-blind-owl"
            className="home__social-icon"
            target="
     _blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169;Mahan. All rights reseved
        </span>
      </div>
    </footer>
  );
}
