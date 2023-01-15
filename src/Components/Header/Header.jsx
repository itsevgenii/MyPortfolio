import "./Header.scss";
import project01 from "../../img/projects/Booki.png";
// import project01Big from "../../img/projects/01-big.jpg";

import project02 from "../../img/projects/Bonsai.png";
import project02Big from "../../img/projects/BonsaiProject2Big.png";

import project03 from "../../img/projects/03-WeatherChecker.png";
import project03Big from "../../img/projects/03-WeatherCheckerBig.png";

const Header = () => {
  const slides = [];

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="title">
          <h1 className="header__title">
            <strong>
              Hi, my name is <em>Evgenii</em>
            </strong>
          </h1>
        </div>
        <div className="wrapper">
          <div className="static-txt">I'm </div>
          <div class="typing-slider">
            <p> &nbsp;a full stack developer</p>

            <p>&nbsp;School of Code graduate</p>
          </div>
        </div>
        <div className="donwload-section">
          <a
            href="escv.pdf"
            className="btnd"
            download="Evgenii Smazanovich CV.pdf"
            // onClick={onButtonClick}
          >
            Download CV
          </a>
          {/* <img
            className="qrs"
            src="https://api.qrserver.com/v1/create-qr-code/?data=https://www.linkedin.com/in/eugene-smazanovich/&size=100x100/&color=140-52-235"
            alt="QR code"
          ></img>
          <span className="LinkedIn">LinkedIn</span> */}
        </div>
        <div className="carousel w-full overflow-hidden">
          <div id="slide1" className="carousel-item relative w-full ">
            <img
              src={project01}
              className="w-96 flex justify-center items-center m-auto "
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src={project02}
              className="w-96 flex justify-center items-center m-auto "
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src={project03}
              className="w-96 flex justify-center items-center m-auto "
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle rounded-full">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
