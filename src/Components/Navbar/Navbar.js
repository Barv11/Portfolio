import React, { useState } from "react";
import {
  UilEstate,
  UilSuitcase,
  UilVerticalAlignBottom,
  // UilUser,
  UilMessage,
} from "@iconscout/react-unicons";
import s from "./Navbar.module.css";

export default function Navbar() {
  const [link, setLink] = useState("");

  return (
    <nav className={s.container}>
      <a
        href="#profile"
        onClick={() => setLink("profile")}
        className={`${s.link} ${link === "profile" ? s.active : null}`}
      >
        <UilEstate />
      </a>
      <a
        href="#projects"
        onClick={() => setLink("projects")}
        className={`${s.link} ${link === "projects" ? s.active : null}`}
      >
        <UilSuitcase />
      </a>
      <a
        href="#technologies"
        onClick={() => setLink("technologies")}
        className={`${s.link} ${link === "technologies" ? s.active : null}`}
      >
        <UilVerticalAlignBottom />
      </a>
      {/* <a
        href="#about"
        onClick={() => setLink("about")}
        className={`${s.link} ${link === "about" ? s.active : null}`}
      >
        <UilUser />
      </a> */}
      <a
        href="#contact"
        onClick={() => setLink("contact")}
        className={`${s.link} ${link === "contact" ? s.active : null}`}
      >
        <UilMessage />
      </a>
    </nav>
  );
}
