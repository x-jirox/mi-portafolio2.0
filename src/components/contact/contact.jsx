import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { ReactComponent as Send } from "../../assets/media/send.svg";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_s6mq46n", "template_n4ytsqg", form.current, {
      publicKey: "BVrQruFdbdJlZ_jTo",
    });
    e.target.reset();
  };

  return (
    <section className="contact sectuin" id="contact">
      <h2 className="section__title">Ponte en Contacto</h2>
      <span className="section__subtitle">Comunicate</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Hablame</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-envelope contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                correalenin045@gmail.com
              </span>
              <a
                href="mailto:correalenin045@gmail.com"
                className="contact__button"
              >
                Escribeme
                <i className="uil uil-arrow-right contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+593-991530112</span>
              <a
                href="https://api.whatsapp.com/send?phone=593991530112&text=Hola,%20quiero%20más%20información"
                className="contact__button"
              >
                Escribeme
                <i className="uil uil-arrow-right contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Describeme tu proyecto</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Nombre</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Ingresa tu nombre"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Ingresa tu correo"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Proyecto</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Escribeme tu proyecto..."
              ></textarea>
            </div>
            <button className="button button--flex">
              Enviar Mensaje
              <Send />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
