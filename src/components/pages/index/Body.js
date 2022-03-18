import React, { useState, useEffect } from "react";

import logo from "../../../images/logo.png";
import office from "../../../images/office.png";
import avatar from "../../../images/female-avatar.png";

import { useLocation } from "react-router-dom";
import { useContext } from "react";

import "./owl.carousel.min.css";
import Context from "../../../Context/Context";

export function Body() {
  const { auth } = useContext(Context)
  let location = useLocation();
  location.state = {
    user: {
      idUsuario: null,
      nomeUsuario: '',
      sobrenomeUsuario: '',
      emailUsuario: '',
      senhaUsuario: '',
      sexUsuario: '',
      tipoUsuario: '',
    }
  }

  const [user, setUser] = useState({
       idUsuario: '',
       nomeUsuario: '',
       sobrenomeUsuario: '',
       emailUsuario: '',
       senhaUsuario: '',
       sexUsuario: '',
       tipoUsuario: ''
  });

  // setUser((prevUser) => ({
  //   ...prevUser,
  //   [user.idUsuario]: location.state.user.idUsuario,
  //   [user.nomeUsuario]: location.state.user.nomeUsuario,
  //   [user.sobrenomeUsuario]: location.state.user.sobrenomeUsuario,
  //   [user.emailUsuario]: location.state.user.emailUsuario,
  //   [user.senhaUsuario]: location.state.user.senhaUsuario,
  //   [user.sexUsuario]: location.state.user.sexUsuario,
  //   [user.tipoUsuario]: location.state.user.tipoUsuario
  // }))

  return (
    <>
      <section className="hero hero-bg d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-10 col-12 d-flex flex-column justify-content-center align-items-center">
              <div className="hero-text">
                <h1 className="text-white" data-aos="fade-up">
                  As melhores noticias da Cidade Tiradentes 
                </h1>

                <a
                  href="contact.php"
                  className="custom-btn btn-bg btn mt-3"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Entre em contato
                </a>

                <strong
                  className="d-block py-3 pl-5 text-white"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i className="fa fa-phone mr-2"></i> +55 (11) 98451-6987
                </strong>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div
                className="hero-image"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <img src={logo} className="img-fluid" alt="Cidade Tiradentes" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about section-padding pb-0" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto col-md-10 col-12">
              <div className="about-info">
                <h2 className="mb-4" data-aos="fade-up">
                  Somos o <strong>melhor portal de noticias </strong> da Cidade
                  Tiradentes
                </h2>

                <p className="mb-0" data-aos="fade-up">
                  Todos os dias nossa <strong>equipe</strong> se empenha para te
                  dar <strong>noticias</strong> da Cidade Tiradentes.
                  <br></br>Sinta-se a <strong>vontade</strong> para{" "}
                  <strong>navegar</strong> no nosso site.
                </p>
              </div>

              <div
                className="about-image"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img src={office} className="img-fluid" alt="office" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- TESTIMONIAL --> */}
      <section className="testimonial section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-5 col-12">
              <div className="contact-image" data-aos="fade-up">
                <img src={avatar} className="img-fluid" alt="website" />
              </div>
            </div>

            <div className="col-lg-6 col-md-7 col-12">
              <h4 className="my-5 pt-3" data-aos="fade-up" data-aos-delay="100">
                Testemunhos de clientes
              </h4>

              <div
                className="quote"
                data-aos="fade-up"
                data-aos-delay="200"
              ></div>

              <h2 className="mb-4" data-aos="fade-up" data-aos-delay="300">
                A CT News é o melhor portal de notícias, sempre atualizados
                sobre todos os acontecimentos.
              </h2>

              <p data-aos="fade-up" data-aos-delay="400">
                <strong>Maria Luiza</strong>

                <span className="mx-1">/</span>

                <small>Moradora da Cidade Tiradentes</small>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
