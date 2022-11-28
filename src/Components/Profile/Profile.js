import React from "react";
import {
  UilGithub,
  UilLinkedin,
  UilFileDownloadAlt,
  // UilWhatsapp,
} from "@iconscout/react-unicons";
// import CV from "../../assets/CV/Bryan CV.pdf";
import logo from "./../../assets/desing.png";
import s from "./Profile.module.css";

export default function Profile() {
  return (
    <header id="profile" className={s.container}>
      <div className={s.first}>
        <div className={s.icons}>
          {/* https://github.com/Barv11 target="BLANK"*/}
          <a href="">
            <UilGithub />
          </a>
          {/* <a href="https://wa.link/6u9ttr" target="BLANK">
            <UilWhatsapp />
          </a> */}
          {/* https://www.linkedin.com/in/barv11/ target="BLANK"*/}
          <a href="">
            <UilLinkedin />
          </a>
          {/* <a download="Bryan Ramos Vargas CV" href={CV}>
            <UilFileDownloadAlt />
            Resume
          </a> */}
          <a href="#contact">
            <UilFileDownloadAlt />
            Resume
          </a>
        </div>
      </div>

      <div className={s.second}>
        <div className={s.me}>
          <h2>Bryan Ramos Vargas</h2>
          <p>Developer Full Stack</p>
        </div>
        <div className={s.image}>
          <img src={logo} alt="programer walk" />
        </div>
      </div>
    </header>
  );
}
