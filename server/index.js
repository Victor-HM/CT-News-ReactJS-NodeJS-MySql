const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "3442397_crud",
});


//INSERÇÃO DE DADOS
app.post("/register", (req, res) => {
  const { name } = req.body;
  const { sobrenome } = req.body;
  const { email } = req.body;
  const { password } = req.body;
  const { sex } = req.body;
  const { type } = req.body;

  let SQL = "INSERT INTO tbl_news_usuario (nomeUsuario, sobrenomeUsuario, emailUsuario, senhaUsuario, tipoSex, tipoUsuario) VALUES (?, ?, ?, ?, ?, ?)";

  try {
    db.query(
      SQL,
      [name, sobrenome, email, password, sex, type],
      (err, result) => {
        if (err) console.log(err);
        else {
          result.message = 'Usuario cadastrado'
          res.send(result);
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
});

//VERIFICAÇÃO DO LOGIN
app.post('/login', (req, res) => {
  const { email } = req.body
  const { password } = req.body

  let SQL = "SELECT * FROM tbl_news_usuario WHERE emailUsuario = ? && senhaUsuario = ?";

  db.query(SQL,[email, password], (err, result) => {
    if (err) console.log(err)
    else res.send(result)
  })
})

//ATUALIZAR DADOS
app.put('/update', (req, res) => {
  const { id } = req.body
  const { name } = req.body
  const { sobrenome } = req.body
  const { email } = req.body
  const { senha } = req.body

  let SQL = "UPDATE tbl_news_usuario  SET nomeUsuario = ?, sobrenomeUsuario = ?, emailUsuario = ?, senhaUsuario = ? WHERE idUsuario = ?";

  db.query(SQL, [name, sobrenome, email, senha, id], (err, result) => {
    if(err) console.log(err)
    else res.send(result)
  })
})

app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;

  let SQL = "DELETE FROM tbl_news_usuario WHERE idUsuario = ?"

  db.query(SQL, [id], (err, result) => {
    if(err) console.log(err)
    else res.send(result)
  })
})

app.post('/news', (req, res) => {
  let SQL = "SELECT * from tbl_news_noticia"

  db.query(SQL, (err, result) => {
    if(err) console.log(err)
    else res.send(result)
  })
})

app.listen(3001, () => {
  console.log("Server rodando");
});
