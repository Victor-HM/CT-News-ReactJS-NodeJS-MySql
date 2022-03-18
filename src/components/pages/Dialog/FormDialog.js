import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './Dialog.css'
import Axios from 'axios'

export function FormDialog(props) {
  const [editValues, setEditValues] = useState({
    id: props.id,
    name: props.name,
    sobrenome: props.sobrenome, 
    email: props.email,
    senha: props.senha,
  });

  const handleEditUser = () => {
    Axios.put('http://localhost:3001/update', {
      id: editValues.id,
      name: editValues.name,
      sobrenome: editValues.sobrenome, 
      email: editValues.email,
      senha: editValues.senha,
    });

    handleClose()
  }

  const handleDeleteGame = () => {
    Axios.delete(`http://localhost:3001/delete/${editValues.id}`);

    handleClose()
  }

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleChangeValues = (value) => {
    setEditValues(prevValue => ({
      ...prevValue,
      [value.target.id]: value.target.value
    }))
  }

  return (
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>Editar</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome"
            defaultValue={editValues.name}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />
          <TextField
            autoFocus
            margin="dense"
            id="sobrenome"
            label="Sobrenome"
            defaultValue={editValues.sobrenome}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            defaultValue={editValues.email}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />
          <TextField
            autoFocus
            margin="dense"
            id="senha"
            label="Senha"
            defaultValue={editValues.senha}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />
        </DialogContent>
        <DialogActions className='container-btn'>
          <Button onClick={() => handleClose()}>Cancel</Button>
          <Button onClick={handleDeleteGame}>Excluir perfil</Button>
          <Button onClick={handleEditUser}>Salvar</Button>
        </DialogActions>
      </Dialog>
  );
}