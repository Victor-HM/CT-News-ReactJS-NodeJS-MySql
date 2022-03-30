import React from "react";
import './about.css'
import felipe from '../../../images/dev/Dev_FelipeD.jpg'
import samuel from '../../../images/dev/Dev_Samuel.jpg'
import victor from '../../../images/dev/Dev_VictorHugo.jpg'

export function About() {
  return (
    <>
      <section className="project-detail section-padding-half">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-9 mx-auto col-md-10 col-12 mt-lg-5 text-center"
              data-aos="fade-up"
            >
              <h4>CT News</h4>

              <h1>Desenvolvedores</h1>
            </div>
          </div>
        </div>
      </section>

      <div className="card1">
        <div className="imgBxs">
          <img src={felipe} />
        </div>
        <div className="contentUser">
          <div className="details">
            <h2>
              Felipe Dourado<br></br>
              <span>Desenvolvedor do site</span>
            </h2>
            <ul className="sci">
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card1">
        <div className="imgBxs">
          <img src="" />
        </div>
        <div className="contentUser">
          <div className="details">
            <h2>
              Gustavo Soares<br></br>
              <span>Desenvolvedor do site</span>
            </h2>
            <ul className="sci">
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card1">
        <div className="imgBxs">
          <img src={samuel} />
        </div>
        <div className="contentUser">
          <div className="details">
            <h2>
              Samuel Batista<br></br>
              <span>Desenvolvedor do site</span>
            </h2>
            <ul className="sci">
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card1">
        <div className="imgBxs">
          <img src={victor} />
        </div>
        <div className="contentUser">
          <div className="details">
            <h2>
              Victor Hugo<br></br>
              <span>Desenvolvedor do site</span>
            </h2>
            <ul className="sci">
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="project-detail section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 mb-5">
              <img
                src="images/project/project-detail/personal-website.png"
                className="img-fluid"
                alt="personal website"
                data-aos="fade-up"
              />
            </div>

            <div
              className="col-lg-5 col-md-6 mr-lg-auto mt-lg-5 col-12"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h2>Quem somos?</h2>

              <p className="mt-3 mb-4">
                Somos Alunos da Etec Cidade Tiradentes. Estamos fazendo um
                trabalho em grupo, e recebemos a missão de fazer um site de
                notícias do bairro. O Grupo é composto por 4 alunos, cujo os
                nomes são:
              </p>

              <ul className="list-detail">
                <li>
                  <span>Felipe Dourado Siqueira</span>
                </li>
                <li>
                  <span>Gustavo Soares Rodrigues</span>
                </li>
                <li>
                  <span>Samuel Batista Lima</span>
                </li>
                <li>
                  <span>Victor Hugo Carvalho Moreira dos Santos </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-9 mx-auto col-12" data-aos="fade-up">
            <div className="client-info mt-lg-5 py-lg-5">
              <h3>
                Nosso objetivo da CT News é <strong>informar</strong>,{" "}
                <strong>entreter</strong> e contar as melhores{" "}
                <strong>notícias</strong> para a população.
              </h3>

              <div className="d-flex align-items-center mt-3">
                <img
                  src="images/project/project-detail/male-avatar.png"
                  className="img-fluid"
                  alt="male avatar"
                />

                <p>Obrigado por nos acompanhar</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
