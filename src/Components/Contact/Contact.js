import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { UilUsersAlt, UilAt } from "@iconscout/react-unicons";
import s from "./Contact.module.css";

export default function Contact() {
  const [state, handleSubmit] = useForm("xzbwqjjw");

  return (
    <div id="contact" className={s.container}>
      <h1>Contáctame</h1>
      <form autoComplete="off" className={s.contact} onSubmit={handleSubmit}>
        <div className={s.name}>
          <input type="text" name="name" id="name" required />
          <UilUsersAlt />
          <label htmlFor="name">Nombre Completo</label>
        </div>

        <div className={s.name}>
          <input type="email" name="email" id="correo" required />
          <UilAt />
          <label htmlFor="correo">Correo</label>
        </div>
        {state.errors.length ? (
          <div className={s.error}>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        ) : (
          ""
        )}
        <div className={s.name}>
          <textarea name="mensaje" id="mensaje" required></textarea>
          <label htmlFor="mensaje">Mensaje</label>
        </div>

        <button type="submit" disabled={state.submitting}>
          Enviar
        </button>

        {state.succeeded ? <span className={s.success}>¡Gracias por su interés!</span> : ""}
      </form>
    </div>
  );
}
