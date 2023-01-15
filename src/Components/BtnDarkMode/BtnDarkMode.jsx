import { useEffect, useRef } from "react";
import { useLocalStorage } from "../../utils/UseLocalStorage";
import DetectDarkMode from "../../utils/DetectDarkMode";

import sun from "./sun.svg";
import moon from "./moon.svg";

import "./BtnDarkMode.css";

const BtnDarkMode = () => {
  //using of customHook to save colour scheme in local storage
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", DetectDarkMode());
  const BtnRef = useRef(null);

  //change of dark/light mode using useEffect
  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
      BtnRef.current.classList.add("dark-mode-btn--active");
    } else {
      document.body.classList.remove("dark");
      BtnRef.current.classList.remove("dark-mode-btn--active");
    }
  }, [darkMode]);

  //when system settings will change, out dark/light mode will change
  //empty second dependency because it is only going to work when we first load the windon
  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";

        if (newColorScheme === "dark") {
          darkMode.classList.add("dark-mode-btn--active");
          document.body.classList.add("dark");
          localStorage.setItem("darkMode", "dark");
        } else {
          darkMode.classList.remove("dark-mode-btn--active");
          document.body.classList.remove("dark");
          localStorage.setItem("darkMode", "light");
        }
      });
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === "light" ? "dark" : "light";
    });
  };

  const btnNormal = "dark-mode-btn";
  const btnActive = "dark-mode-btn dark-mode-btn--active";

  return (
    <>
      {darkMode}
      <button
        ref={BtnRef}
        className={darkMode === "dark" ? btnActive : btnNormal}
        onClick={toggleDarkMode}
      >
        <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
        <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
      </button>
    </>
  );
};

export default BtnDarkMode;
