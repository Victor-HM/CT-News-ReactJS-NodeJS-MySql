import React, { useState, useContext } from "react";

import "./cad.css";
import Axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Context from "../../../Context/Context";

export function Login() {
  const [values, setValues] = useState({
    emailUsuario: "",
    senhaUsuario: "",
  });

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };
	
	let navigate = useNavigate();

  const { auth, setAuth, user, setUser } = useContext(Context)

  const handleLogin = () => {
    let email = values.emailUsuario;
    let senha = values.senhaUsuario;

    if (email === "" || senha === "") {
      alert("Preencha todos os campos");
    } else {
      Axios.post("http://localhost:3001/login", {
        email: email,
        password: senha,
      }).then((response) => {

        let userObj = response.data;

        if (userObj.length === 1) {
          alert("Login feito com sucesso");

          setUser(userObj[0]);

          //alterando a autenticação
          setAuth(true)

          //nevegar a outra rota
          navigate('/perfil')
        } else {
          alert("Email ou senha invalidos");
        }
      });
    }
  };

  return (
    <div className="container-content">
      <div action="bd_login.php" method="POST" className="borderForm form">

        <div className="inputBox">
          <label htmlFor="Email">Email</label>
          <input
            type="text"
            name="emailUsuario"
            required=""
            id="Email"
            onChange={handleChangeValues}
          />
        </div>

        <div className="inputBox">
          <label htmlFor="Senha">Senha</label>
          <input
            type="password"
            name="senhaUsuario"
            required=""
            id="Senha"
            onChange={handleChangeValues}
          />
        </div>

        <div className="submit">
          <button type="submit" name="login" onClick={() => handleLogin()}>
            LOGIN
          </button>
        </div>
        <p>
          {" "}
          Não está cadastrado? Então clique <a href="register.php">aqui</a>.
        </p>
      </div>
    </div>
  );
}

export function UserRegister(props) {}
