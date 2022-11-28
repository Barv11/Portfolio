import React from "react";
import s from "./Technologies.module.css";
import {
  css,
  express,
  git,
  html,
  javascript,
  nodejs,
  postgresql,
  react,
  redux,
  sequelize,
  sqlite,
} from "../../assets/icons/index";
import CardTech from "./CardTech/CardTech";

export default function Technologies() {
  const language = [{ img: javascript, name: "JavaScript" }];

  const database = [
    { img: sqlite, name: "SQLite" },
    { img: postgresql, name: "PostgreSQL" },
  ];

  const back = [
    { img: express, name: "Express" },
    { img: sequelize, name: "Sequelize" },
    { img: nodejs, name: "Node.js" },
  ];

  const front = [
    { img: html, name: "HTML" },
    { img: css, name: "CSS" },
    { img: react, name: "React" },
    { img: redux, name: "Redux" },
  ];

  const versionControl = [{ img: git, name: "Git" }];
  return (
    <section id="technologies" className={s.container}>
      <div className={s.skill}>
        <h1>Languages {'⇒'}</h1>
        {language.map((el) => (
          <CardTech key={el.name} tech={el} />
        ))}
      </div>
      <div className={s.skill}>
        <h1>Database {'⇒'}</h1>
        {database.map((el) => (
          <CardTech key={el.name} tech={el} />
        ))}
      </div>
      <div className={s.skill}>
        <h1>Back-end {'⇒'}</h1>
        {back.map((el) => (
          <CardTech key={el.name} tech={el} />
        ))}
      </div>
      <div className={s.skill}>
        <h1>Front-end {'⇒'}</h1>
        {front.map((el) => (
          <CardTech key={el.name} tech={el} />
        ))}
      </div>
      <div className={s.skill}>
        <h1>Version Control {'⇒'}</h1>
        {versionControl.map((el) => (
          <CardTech key={el.name} tech={el} />
        ))}
      </div>
    </section>
  );
}
