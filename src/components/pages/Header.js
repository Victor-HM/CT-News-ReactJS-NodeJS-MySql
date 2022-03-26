import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../Context/Context";

export function Header() {

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="fa fa-line-chart"></i>
          CT News
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="#about" className="nav-link smoothScroll">
                Introdução
              </a>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link">
                Quem Somos?
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/News" className="nav-link">
                Notícias
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link login">
                Login
              </Link>
            </li>
            {<AuthHeader />}
          </ul>
        </div>
      </div>
    </nav>
  );
}

function AuthHeader() {

  const { auth } = useContext(Context);
  const [authe, setAuthe] = useState(auth)

  useEffect(() => {
    setAuthe(auth)
  }, [auth]);

  if (authe === true) {
    return (
        <li className="nav-item">
          <Link to="/perfil" className="nav-link register">
            Perfil
          </Link>
        </li>
    );
  } else {
    return (
      <li className="nav-item">
        <Link to="/register" className="nav-link register">
          Cadastrar
        </Link>
      </li>
    )
  }
}