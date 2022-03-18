import React, { useState } from 'react'
import './cad.css'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

export function Register() {
  const [values, setValues] = useState({
		nomeUsuario: '',
		sobrenomeUsuario: '',
		emailUsuario: '',
		senhaUsuario: '',
		sexoUsuario: '',
		tipoUsuario: ''
	})

	let navigate = useNavigate()

  const handleChangeValue = (value) => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value
    }))
  }

  const handleRegister = () => {
		const nome = values.nomeUsuario;
		const sobrenome = values.sobrenomeUsuario;
		const email = values.emailUsuario;
		const senha = values.senhaUsuario;
		const sexo = values.sexoUsuario;
		const tipo = values.tipoUsuario;

		if(nome === '' || sobrenome === '' || email === '' || senha === '' || sexo === '' || tipo === ''){
			alert('Preencha todos os campos');
		} else {
			Axios.post("http://localhost:3001/register", {
				name: nome,
				sobrenome: sobrenome,
				email: email,
				password: senha,
				sex: sexo,
				type: tipo
			}).then((response) => {

				let message = response.data.message

				if(message = 'Usuario cadastrado') {
					alert('Usuario cadastrado')
					navigate('/')
				}else{
					alert('Algo deu errado')
				}
			});
		}
  }

  return(
    <div className="container-content">
		<div className="borderForm form">

			<div className="inputBox">
				<label htmlFor="nome">Nome</label>
				<input type="text" name="nomeUsuario" required="" id="nome" onChange={handleChangeValue}/>
			</div>

			<div className="inputBox">
				<label htmlFor="sobrenome">Sobrenome</label>
				<input type="text" name="sobrenomeUsuario" required="" id="sobrenome" onChange={handleChangeValue} />
			</div>

				<div className="inputBox">
					<label htmlFor="Email">Email</label>
					<input type="text" name="emailUsuario" required="" id="Email" onChange={handleChangeValue} />
				</div>

				<div className="inputBox">
					<label htmlFor="Senha">Senha</label>
					<input type="password" name="senhaUsuario" required="" id="Senha" onChange={handleChangeValue} />
				</div>

				<div className="inputBox-types">
					<div className="types">
						<label htmlFor="sexoUsuario">Sexo</label>
						<select name="sexoUsuario" id="sexoUsuario" onChange={handleChangeValue}>
							<option value=""></option>
							<option value="Masculino">Masculino</option>
							<option value="Feminino">Feminino</option>
							<option value="Neutro">Prefiro não dizer</option>
						</select>
					</div>

					<div className="types">
						<label htmlFor="tipo">Tipo de Perfil</label>
						<select name="tipoUsuario" id="tipo" onChange={handleChangeValue}>
							<option value=""></option>
							<option value="Leitor">Leitor</option>
							<option value="Jornalista">Jornalista</option>
						</select>
					</div>
				</div>

				<div className="submit">
					<button type="submit" name="cadastrar" value="Cadastrar" onClick={() => handleRegister()}>Cadastrar</button>
				</div>
			</div>
		</div>
  );
}