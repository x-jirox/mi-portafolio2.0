import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"
import { ReactComponent as Send } from "../../assets/send.svg";

const Contact = () => {
  return (
    <section className="contact sectuin" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-envelope contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">user@gmail.com</span>
              <a
                href="mailto:correalenin045@gmail.com"
                className="contact__button"
              >
                Write me
                <i className="uil uil-arrow-right contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">999-888-777</span>
              <a
                href="https://api.whatsapp.com/send?phone=593991530112&text=Hola,%20quiero%20más%20información"
                className="contact__button"
              >
                Write me
                <i className="uil uil-arrow-right contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Incert ypur name"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Incert your email"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your project"
              ></textarea>
            </div>
            <button className="button button--flex">
              Send message
              <Send />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
