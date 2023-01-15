import "./Header.css";
import { useState } from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Evgenii</em>
          </strong>
        </h1>
        <div className="wrapper">
          <div className="static-txt">I'm</div>
          <ul className="dynamic-txts">
            <li>
              <span>a full stack web developer</span>
            </li>
            <li>
              <span>School of Code graduate</span>
            </li>
          </ul>
        </div>
        <div className="donwload-section">
          <a
            href="escv.pdf"
            className="btn"
            download="Evgenii Smazanovich CV.pdf"
            // onClick={onButtonClick}
          >
            Download CV
          </a>
          <img
            className="qrs"
            src="https://api.qrserver.com/v1/create-qr-code/?data=https://www.linkedin.com/in/eugene-smazanovich/&size=100x100/&color=140-52-235"
            alt="QR code"
          ></img>
          <span className="LinkedIn">LinkedIn</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
