import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "./news.css";
import Context from "../../../Context/Context";

export function RegisterNews() {
  const navigate = useNavigate();

  const { user } = useContext(Context);

  const [values, setValues] = useState({
    tituloNews: "",
    sobretituloNews: "",
    categoriaNews: "",
    conteudoNews: "",
  });

  const handleChangeValue = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleRegister = () => {
    const title = values.tituloNews;
    const subtitle = values.sobretituloNews;
    const categoria = values.categoriaNews;
    const content = values.conteudoNews;

    if (title === "" || subtitle === "" || categoria === "" || content === "") {
      alert("Preencha todos os campos");
    } else {
      Axios.post("http://localhost:3001/registerNews", {
        title: values.tituloNews,
        subtitle: values.sobretituloNews,
        categoria: values.categoriaNews,
        content: values.conteudoNews,
        id: user.idUsuario,
        nome: user.nomeUsuario,
        email: user.emailUsuario,
      }).then((response) => {
        const message = response.request.statusText;

        if (message === "OK") {
          alert("Noticia Cadastrada");

          navigate("/");
        } else {
          alert("Algo deu Errado");
        }
      });
    }
  };

  return (
    <div>
      <section className="project-detail">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-9 mx-auto col-md-10 col-12 mt-lg-5 text-center"
              data-aos="fade-up"
            >
              <input
                type="text"
                placeholder="Titulo"
                name="tituloNews"
                className="titulo"
                onChange={handleChangeValue}
              />

              <div className="client-info">
                <div className="d-flex justify-content-center align-items-center mt-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-detail">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-9 mx-auto col-md-11 col-12 my-5 pt-3"
              data-aos="fade-up"
            >
              <input
                type="text"
                name="sobretituloNews"
                placeholder="Sobretitulo"
                className="sobreTitulo"
                onChange={handleChangeValue}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="categoriaNews">
        <label>Categoria: </label>
        <select
          name="categoriaNews"
          id="categoriaNews"
          onChange={handleChangeValue}
        >
          <option value=""></option>
          <option value="Politica">Politica</option>
          <option value="Tempo">Tempo</option>
          <option value="Esporte">Esporte</option>
          <option value="Criminalidade">Criminalidade</option>
          <option value="Empregos">Vagas de Empregos</option>
          <option value="Eventos">Feiras e Eventos</option>
          <option value="Saúde">Saúde</option>
          <option value="Comercios">Comercios</option>
          <option value="Transportes">Transportes</option>
          <option value="Cultura">Cultura e Entretenimento</option>
        </select>
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto col-md-10 col-12">
              <br></br>
              <div className="row">
                <div className="col-lg-12 col-120">
                  <textarea
                    className="form-control"
                    rows="30"
                    name="conteudoNews"
                    placeholder="Noticia"
                    onChange={handleChangeValue}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="submitNews">
        <button
          type="submit"
          name="cadastrar"
          value="Cadastrar"
          onClick={() => handleRegister()}
        >
          CRIAR NOTÍCIA
        </button>
      </div>
    </div>
  );
}
