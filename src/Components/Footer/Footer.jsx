import fafacebook from "../../img/icons/fafacebook.svg";
import fainstagram from "../../img/icons/fainstagram.svg";
import fatwitter from "../../img/icons/fatwitter.svg";
import falinkedIn from "../../img/icons/falinkedIn.svg";
import fagithub from "../../img/icons/fagithub.svg";

import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a
                href="https://www.facebook.com/evgenii.smazanovich/"
                target="_blank"
              >
                <img src={fafacebook} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.instagram.com/its.evgenii.smazanovich/"
                target="_blank"
              >
                <img src={fainstagram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://twitter.com/1ItsEugene1" target="_blank">
                <img src={fatwitter} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a target="_blank" href="https://github.com/itsevgenii">
                <img src={fagithub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.linkedin.com/in/eugene-smazanovich/"
                target="_blank"
              >
                <img src={falinkedIn} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2022 Evgenii Smazanovich</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
