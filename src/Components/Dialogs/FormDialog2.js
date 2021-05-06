/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable no-useless-escape */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable no-alert */
/* eslint-disable no-restricted-syntax */
/* eslint-disable eqeqeq */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PhoneInput from 'react-phone-input-2';
import { useTheme } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import 'react-phone-input-2/lib/material.css';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

// import Button from '../Assets/Button';
import styles from './FormDialog.module.css';

export default function FormDialog2(props) {
  const [res, setRes] = React.useState(null);
  const [telefono, setTelefono] = React.useState();
  const [nombre, setNombre] = React.useState(null);
  const { open, handleClose } = props;
  const [apellidoPaterno, setApellidoPaterno] = React.useState(null);
  const [apellidoMaterno, setApellidoMaterno] = React.useState(null);
  // const [telefono, setTelefono] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [edad, setEdad] = React.useState(null);
  const [url, setUrl] = React.useState(null);
  const router = useRouter();

  const {
    register, handleSubmit, reset, formState: { errors },
  } = useForm();

  // console.log(reset);
  React.useEffect(() => {
    setUrl(window.location.origin);
  });
  console.log(url);
  const create = async (data) => {
    let response;
    try {
      response = await fetch(`${url}/api/curso2`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      await setRes(response);
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = (data) => {
    Object.assign(data, { telefono });
    // console.log('post', post);
    const post = {
      nombre: data.nombre,
      apellidoPaterno: data.apellidoPaterno,
      apellidoMaterno: data.apellidoMaterno,
      edad: data.edad,
      correo: data.correo,
      telefono: data.telefono,

    };

    create(post);
    handleClose();
    window.location.reload();
    // reset();
  };
  const onChangeCorreo = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const onTextInputKeyUp = (e) => {
    // e.target.style.height = 'inherit';
    // e.target.style.height = `${e.target.scrollHeight}px`;
    if (e.key.length === 1) {
      const m = e.target.value;
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      const c = m.split('\n').map((s) => s.charAt(0).toUpperCase() + s.substr(1)).join('\n');
      e.target.value = c;
      e.target.selectionStart = start;
      e.target.selectionEnd = end;
    }
  };
  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        // onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Curso de Maquillista Profesional</DialogTitle>
        <DialogContent className={styles.container}>
          <DialogContentText>
            Ingresar los datos correspondientes para su previo registro
          </DialogContentText>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <TextField
              onChange={(e) => setNombre(e.target.value)}
              autoFocus
              margin="dense"
              id="name"
              label="Nombre"
              type="text"
              value={nombre}
              fullWidth
              variant="outlined"
              onKeyUp={onTextInputKeyUp}
              {...register('nombre',
                { pattern: /^[A-Za-z]+$/i, required: true })}
            />
            {errors.nombre && errors.nombre.type === 'required' && <span className={styles.error}>Este campo es requerido</span>}
            {errors.nombre && errors.nombre.type === 'pattern' && <span className={styles.error}>Ingresar un nombre Valido</span> }
            <TextField
              autoFocus
              margin="dense"
              id="name"
              onKeyUp={onTextInputKeyUp}
              label="Apellido Paterno"
              onChange={(e) => setApellidoP(e.target.value)}
              type="text"
              fullWidth
              variant="outlined"
              {...register('apellidoPaterno',
                { pattern: /^[A-Za-z]+$/i, required: true })}
            />
            {errors.apellidoPaterno && errors.apellidoPaterno.type === 'required' && <span className={styles.error}>Este campo es requerido</span>}
            {errors.apellidoPaterno && errors.apellidoPaterno.type === 'pattern' && <span className={styles.error}>Ingresar un Apellido Valido</span> }
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Apellido Materno"
              onChange={(e) => setApellidoM(e.target.value)}
              type="text"
              fullWidth
              onKeyUp={onTextInputKeyUp}
              variant="outlined"
              {...register('apellidoMaterno',
                {
                  pattern: /^[A-Za-z]+$/i,
                  required: true,
                })}
            />
            {errors.apellidoMaterno && errors.apellidoMaterno.type === 'required' && <span className={styles.error}>Este campo es requerido</span>}
            {errors.apellidoMaterno && errors.apellidoMaterno.type === 'pattern' && <span className={styles.error}>Ingresar un Apellido Valido</span> }
            <TextField
              autoFocus
              margin="dense"
              id="standard-number"
              label="Edad"
              type="number"
              onChange={(e) => setEdad(e.target.value)}
              InputProps={{ inputProps: { maxLength: 2 } }}
              fullWidth
              variant="outlined"
              {...register('edad',
                {
                  min: 13,
                  required: true,
                })}
            />
            {errors.edad && errors.edad.type === 'min' && <span className={styles.error}>Ingresa una edad valida mayor de 13 años</span>}
            {errors.edad && errors.edad.type === 'required' && <span className={styles.error}> Este campo es requerido</span>}
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Correo Electronico"
              autoComplete="email"
              type="email"
              fullWidth
              onChange={onChangeCorreo}
              // onChange={(e) => setCorreo(e.target.value)}
              variant="outlined"
              {...register('correo', { pattern: /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i, required: true })}
            />
            {errors.correo && errors.correo.type === 'required' && <span className={styles.error}>Este campo es requerido</span>}
            {errors.correo && errors.correo.type === 'pattern' && <span className={styles.error}>Ingresar un correo valido</span> }

            <PhoneInput
              fullWidth
              country="mx"
              value={telefono}
              containerStyle={{
                // border: '10px solid black',
                marginTop: '20px',
              }}
              inputStyle={{
                // background: 'lightblue',
                width: '100%',
              }}
              onChange={(phone) => setTelefono(phone)}
              // children={styles.phone}
              // placeholder='Codigo de pais'
              inputProps={{
                // name: 'Telefono',
                required: true,
                // autoFocus: true
              }}
            />
            <DialogActions className={styles.buttons}>
              <Button autoFocus onClick={handleClose} color="primary">
                Cancelar
              </Button>
              <Button type="submit" color="primary" autoFocus>
                Inscribirse
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
