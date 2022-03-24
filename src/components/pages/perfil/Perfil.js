import React, { useContext, useState, useEffect } from "react";
import "./Perfil.css";
import { useNavigate } from "react-router-dom";
import { FormDialog } from "../Dialog/FormDialog";
import Context from "../../../Context/Context";
import Axios from "axios";

export function Perfil() {
  const { auth, setAuth, user, setUser } = useContext(Context);
  let [usuario, setUsuario] = useState(user);

  let navigate = useNavigate();

  const handleExit = () => {
    setAuth(false);
    navigate("/");
  };

  const [open, setOpen] = React.useState(false);
  const handleClickCard = () => {
    setOpen(true);
  };

  useEffect(() => {
    Axios.post("http://localhost:3001/login", {
      email: user.emailUsuario,
      password: user.senhaUsuario,
    }).then((response) => {
      setUsuario(response.data[0]);
    });
  }, [usuario]);

  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        id={user.idUsuario}
        name={user.nomeUsuario}
        sobrenome={user.sobrenomeUsuario}
        email={user.emailUsuario}
        senha={user.senhaUsuario}
      />
      <div className="perfil">
        <div className="profile">
          <div className="photo">
            <img src="" alt="" />
          </div>
          <div className="edit user">
            {usuario.nomeUsuario} {usuario.sobrenomeUsuario}
          </div>
          <div className="edit user">{usuario.tipoUsuario}</div>
          <div className="edit user">{usuario.tipoSex}</div>
        </div>

        <div className="information">
          <div className="bar">
            <div className="content-bar">
              <button
                id="news"
                type="submit"
                name="content"
                onClick={() => handleClickCard()}
              >
                Editar perfil
              </button>
              <button
                id="logoff"
                type="submit"
                name="content"
                onClick={() => handleExit()}
              >
                Sair
              </button>
            </div>
          </div>

          <div className="content"></div>
        </div>
      </div>
    </>
  );
}
