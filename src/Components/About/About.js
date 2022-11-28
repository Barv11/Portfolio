import React from "react";
import s from "./About.module.css";
import { peru, mundo } from "../../assets/icons";

export default function About() {
  return (
    <section id="about" className={s.container}>
      <section className={s.header}>
        <h1>Sobre mí</h1>
        <span>
          De <img src={peru} alt="peru" title="Perú" /> para el{" "}
          <img src={mundo} alt="mundo" title="Mundo" />
        </span>
      </section>
      <p>
        Mi nombre es <b>Bryan</b>, tengo 20 años, programador <b>Full Stack</b>{" "}
        curioso, apasionado por la <b>programación</b>. <br />
        Dispuesto a
        aprender, debatir soluciones, compartir conocimientos, afrontar nuevos
        retos, trabajar en equipo y tengo autonomía para crecer <b>profesionalmente</b>. <br />
        Me enfoco en crear experiencias <b>buenas y fluídas</b> entre el{" "}
        <b>producto y usuario</b>. <br />
        Considero que me falta mucho por crecer como <b>persona</b> y{" "}
        <b>profesional</b>, pero poco a poco apuntando hacia arriba. <br />
        Mis metas son: Apoyar a mi <b>familia</b> y vivir{" "}
        <b>haciendo lo que me gusta</b>.
      </p>
      <a href="#contact" className={s.talk}>
        <button>¡Hablemos!</button>
      </a>
    </section>
  );
}
