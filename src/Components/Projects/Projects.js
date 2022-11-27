import React from "react";
import CardProyect from "./CardProyect/CardProyect";
import s from "./Projects.module.css";
import { gamertech, pokeapp, appnotes } from "../../assets/proyects";

export default function Projects() {
  const proyect = [
    {
      img: gamertech,
      name: "GamerTech | E-commerce",
      info: [
        "- En grupo desarrollamos un E-Commerce de componentes de computadores, además de poder armar una PC dependiendo a lo que necesites.",
        "- Tecnologías usadas: JavaScript, CSS, HTML, NodeJs, Express, React, Redux, Sequelize, Stripe, Boostrap, Nodemailer, JsonWebToken, Morgan",
      ],
      link: "https://e-commerce-sage-two.vercel.app/",
    },
    {
      img: pokeapp,
      name: "PokeApp",
      info: [
        "- Esta es una página que consume datos de una API externa, además de una base de datos propia. Es posible filtrar Pokemones por origen y ordenar por nombre o fuerza.",
        "- Puede ver detalles y crear Pokemones que se añadirán a la base de datos.",
      ],
      link: "https://proyectpokemonbarv.vercel.app/",
    },
    {
      img: appnotes,
      name: "AppNotes",
      info: [
        "Web SPA donde puedes crear, editar o eliminar notas usando el Local Storage.",
        "Tecnologías: React, Redux-toolkit.",
      ],
      link: "https://app-notes-three.vercel.app/",
    },
  ];

  return (
    <div id="projects" className={s.container}>
      {proyect.map((el) => (
        <CardProyect proyect={el} key={el.name}/>
      ))}
    </div>
  );
}
