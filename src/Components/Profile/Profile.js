import React, { useState } from "react";
import {
  UilGithub,
  UilLinkedin,
  UilFileDownloadAlt,
  // UilWhatsapp,
} from "@iconscout/react-unicons";
import CV from "../../assets/CV/Bryan CV.pdf";
import s from "./Profile.module.css";

export default function Profile() {
  const [hover, setHover] = useState(false);
  const handleMouseOver = (e) => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <header id="profile" className={s.container}>
      <h2 className={s.name}>Bryan Ramos Vargas</h2>

      <p className={s.dev}>Developer Full Stack</p>

      <div
        onMouseOverCapture={handleMouseOver}
        onMouseOutCapture={handleMouseOut}
        className={s.icons}
      >
        <a data-foo="GitHub" href="https://github.com/Barv11" target="BLANK">
          <UilGithub />
          <span className={hover ? s.enter : s.out}>Github</span>
        </a>
        {/* <a data-foo="WhatsApp" href=" " target="BLANK">
          <UilWhatsapp />
          <span className={hover ? s.enter : s.out}>WhatsApp</span>
        </a> */}
        <a
          data-foo="LinkedIn"
          href="https://www.linkedin.com/in/barv11/"
          target="BLANK"
        >
          <UilLinkedin />
          <span className={hover ? s.enter : s.out}>LinkedIn</span>
        </a>
        <a data-foo="Resume" download="Bryan Ramos Vargas CV" href={CV}>
          <UilFileDownloadAlt />
          <span className={hover ? s.enter : s.out}>Resume</span>
        </a>
      </div>
    </header>
  );
}
