/* eslint-disable no-console */
/* eslint-disable no-useless-escape */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import { Box, FormControl, TextField } from '@material-ui/core';
import React from 'react';
import Layout from '../Layout/Layout';
import styles from './ContactoComponent.module.css';
import { useForm } from 'react-hook-form';
import 'react-phone-input-2/lib/material.css';
import { useRouter } from 'next/router';
import PhoneInput from 'react-phone-input-2';
import fetch from 'isomorphic-unfetch';

function ContactoComponent() {
  const [telefono, setTelefono] = React.useState();
  const {
    register, handleSubmit, reset, formState: { errors },
  } = useForm();
  const [url, setUrl] = React.useState(null);

  const router = useRouter();
  React.useEffect(() => {
    setUrl(window.location.origin);
  });
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

  const create = async (data) => {
    let response;
    try {
      response = await fetch(`${url}/api/contacto`, {
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
      apellido: data.apellido,
      correo: data.correo,
      telefono: data.telefono,
      mensaje: data.mensaje,

    };
    console.log('post', post);
    create(post);
    router.push('/');
    // window.location.reload();
    reset();
  };

  return (
    <Layout title="Contacto">
      <Box className={styles.header} />
      <Box className={styles.container}>
        <div className={styles.card}>
          <h3 className={styles.title}> Ponerse en contacto </h3>
          <p className={styles.text}>Responderemos a su consulta lo antes posible.</p>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <TextField
              id="name"
              label="Nombre"
              type="text"
      // autoFocus
              margin="normal"
              fullWidth
              // variant="outlined"
              onKeyUp={onTextInputKeyUp}
              {...register('nombre',
                { pattern: /^[A-Za-z]+$/i, required: true })}
              className={styles}
            />
            {errors.nombre && errors.nombre.type === 'required' && <span className={styles.error}>Este campo es requerido</span>}
            {errors.nombre && errors.nombre.type === 'pattern' && <span className={styles.error}>Ingresar un nombre Valido</span> }
            <TextField
              autoFocus
              margin="dense"
              id="name"
              onKeyUp={onTextInputKeyUp}
              label="Apellido"
              type="text"
              fullWidth
              // variant="outlined"
              {...register('apellido',
                { pattern: /^[A-Za-z]+$/i, required: true })}
            />
            {errors.apellido && errors.apellido.type === 'required' && <span className={styles.error}>Este campo es requerido</span>}
            {errors.apellido && errors.apellido.type === 'pattern' && <span className={styles.error}>Ingresar un Apellido Valido</span> }
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Correo Electronico"
              autoComplete="email"
              type="email"
              fullWidth
//   onChange={onChangeCorreo}
// onChange={(e) => setCorreo(e.target.value)}
              // variant="outlined"
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
            <TextField
              id="outlined-multiline-static"
              label="Mensaje....."
              multiline
              fullWidth
              rows={4}
              {...register('mensaje',
                { required: true })}
            />
            {errors.correo && errors.correo.type === 'required' && <span className={styles.error}>Este campo es requerido</span>}
            <button type="submit" className={styles.button}> Enviar </button>
          </form>
        </div>
      </Box>
    </Layout>
  );
}

export default ContactoComponent;
