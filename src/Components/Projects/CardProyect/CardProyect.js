import React from "react";
import s from "./CardProyect.module.css";
import { UilLink } from "@iconscout/react-unicons";

export default function CardProyect({ proyect }) {
  const { img, name, info, link } = proyect;
  return (
    <div className={s.container}>
      <img src={img} alt={name} className={s.proyectimg} />

      <div className={s.modal}>
        <div className={s.submodal}>
          <span>{name}</span>
          {info.map((el, idx) => (
            <p key={idx}>{el}</p>
          ))}
          <a href={link} target="BLANK">
            Ir a la página
            <UilLink />
          </a>
        </div>
      </div>
    </div>
  );
}
