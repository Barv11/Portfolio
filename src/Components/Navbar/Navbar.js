import React, { useState } from "react";
import {
  UilEstate,
  UilSuitcase,
  UilVerticalAlignBottom,
  UilUser,
  UilMessage,
} from "@iconscout/react-unicons";
import s from "./Navbar.module.css";

export default function Navbar() {
  const [link, setLink] = useState("");

  return (
    <nav className={s.container}>
      <a
        href="#profile"
        aria-label = "Esta etiqueta redirige a la sección - profile"
        onClick={() => setLink("profile")}
        className={`${s.link} ${link === "profile" ? s.active : null}`}
      >
        <UilEstate />
      </a>
      <a
        href="#about"
        aria-label = "Esta etiqueta redirige a la sección - sobre mí"
        onClick={() => setLink("about")}
        className={`${s.link} ${link === "about" ? s.active : null}`}
      >
        <UilUser />
      </a>
      <a
        href="#projects"
        aria-label = "Esta etiqueta redirige a la sección - proyectos"
        onClick={() => setLink("projects")}
        className={`${s.link} ${link === "projects" ? s.active : null}`}
      >
        <UilSuitcase />
      </a>
      <a
        href="#technologies"
        aria-label = "Esta etiqueta redirige a la sección - tecnologías"
        onClick={() => setLink("technologies")}
        className={`${s.link} ${link === "technologies" ? s.active : null}`}
      >
        <UilVerticalAlignBottom />
      </a>
      <a
        href="#contact"
        aria-label = "Esta etiqueta redirige a la sección - contacto"
        onClick={() => setLink("contact")}
        className={`${s.link} ${link === "contact" ? s.active : null}`}
      >
        <UilMessage />
      </a>
    </nav>
  );
}
