import React, { useState } from "react";
import s from "./Projects.module.css";
import CardProyect from "./CardProyect/CardProyect";
import { gamertech, pokeapp, appnotes, weatherapp } from "../../assets/proyects";
import {
  UilArrowLeft ,
  UilArrowRight ,
} from "@iconscout/react-unicons";

export default function Projects() {
  const [position, setPosition] = useState(0);
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
        "- Esta es una página que consume datos de una API externa, además de una base de datos propia. Es posible filtrar Pokemones por origen, ordenar por nombre o fuerza, ver detalles y agregar Pokemones a la base de datos.",
        "- Tecnologías usadas: JavaScript, CSS, HTML, NodeJs, Express, React, Redux, Sequelize, Morgan",
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
    {
      img: weatherapp,
      name: "WeatherApp",
      info: [
        "Web SPA donde puedes buscar ciudades, paises o distritos consumidos por una API.",
        "Ver detalles de cada lugar y eliminar, los datos son guardados en el Local Storage",
        "Tecnologías: React, Local Storage.",
      ],
      link: "https://weather-app-barv11.vercel.app/",
    },
  ];

  const onClickPrev = () => {
    if (position === 0) {
      setPosition(proyect.length - 1);
    } else {
      setPosition((prev) => prev - 1);
    }
  };

  const onClickNext = () => {
    if (position === proyect.length - 1) {
      setPosition(0);
    } else {
      setPosition((prev) => prev + 1);
    }
  };

  return (
    <section id="projects" className={s.container}>
      <UilArrowLeft  onClick={onClickPrev} />
      <CardProyect proyect={proyect[position]} key={proyect[position].name} />
      <UilArrowRight  onClick={onClickNext} />
    </section>
  );
}
