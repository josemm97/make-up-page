/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import { Box, Grid } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import Layout from '../Layout/Layout';
import FormDialog1 from '../Dialogs/FormDialog1';
import styles from './CursosComponent.module.css';

function CursosComponent() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Layout>
      <Head>
        <title>Cursos </title>
      </Head>
      <Box className={styles.header}>
        <h4 className={styles.header__title}>Cursos</h4>
      </Box>
      <Box className={styles.container}>
        <Box className={styles.curso__container}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Box className={styles.curso__title}>
                <h5> Estilismo</h5>
                <img src="/img/estilismo-phone.png" alt="Estilismo" />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className={styles.curso__body}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus tempus laoreet. Curabitur et turpis dui. Nam nec quam venenatis, egestas risus non, accumsan libero. Fusce ac nibh a nisl semper maximus ac vel sem. Nunc magna nunc, congue et odio in, sodales iaculis velit. Aliquam erat volutpat. Suspendisse non libero vel leo eleifend viverra.
                </p>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className={styles.curso__footer}>
                <button type="submit" onClick={handleClickOpen} className={styles.curso__button}> Inscribirse </button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box className={styles.curso__container}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Box className={styles.curso__title}>
                <h5> Maquillista Profesional</h5>
                <img src="/img/maquillaje-phone.png" alt="Estilismo" />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className={styles.curso__body}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus tempus laoreet. Curabitur et turpis dui. Nam nec quam venenatis, egestas risus non, accumsan libero. Fusce ac nibh a nisl semper maximus ac vel sem. Nunc magna nunc, congue et odio in, sodales iaculis velit. Aliquam erat volutpat. Suspendisse non libero vel leo eleifend viverra.
                </p>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className={styles.curso__footer}>
                <button type="submit" className={styles.curso__button}> Inscribirse </button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box className={styles.curso__container}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Box className={styles.curso__title}>
                <h5> Tecnico en uñas </h5>
                <img src="/img/uñas-phone.png" alt="Estilismo" />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className={styles.curso__body}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus tempus laoreet. Curabitur et turpis dui. Nam nec quam venenatis, egestas risus non, accumsan libero. Fusce ac nibh a nisl semper maximus ac vel sem. Nunc magna nunc, congue et odio in, sodales iaculis velit. Aliquam erat volutpat. Suspendisse non libero vel leo eleifend viverra.
                </p>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className={styles.curso__footer}>
                <button type="submit" className={styles.curso__button}> Inscribirse </button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box className={styles.curso__container}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Box className={styles.curso__title}>
                <h5> Peluqueria Profesional</h5>
                <img src="/img/corte-decabello-phone.png" alt="Estilismo" />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className={styles.curso__body}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus tempus laoreet. Curabitur et turpis dui. Nam nec quam venenatis, egestas risus non, accumsan libero. Fusce ac nibh a nisl semper maximus ac vel sem. Nunc magna nunc, congue et odio in, sodales iaculis velit. Aliquam erat volutpat. Suspendisse non libero vel leo eleifend viverra.
                </p>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className={styles.curso__footer}>
                <button type="submit" className={styles.curso__button}> Inscribirse </button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <FormDialog1 handleClickOpen={handleClickOpen} open={open} handleClose={handleClose} />
    </Layout>
  );
}

export default CursosComponent;
