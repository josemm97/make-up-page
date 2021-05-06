/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import { Box, Grid } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import Layout from '../Layout/Layout';
import FormDialog1 from '../Dialogs/FormDialog1';
import FormDialog2 from '../Dialogs/FormDialog2';
import FormDialog3 from '../Dialogs/FormDialog3';
import FormDialog4 from '../Dialogs/FormDialog4';
import styles from './CursosComponent.module.css';

function CursosComponent() {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload();
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
                <h5> Estilismo y Bienestar social</h5>
                <img src="/img/estilismo-phone.png" alt="Estilismo" />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className={styles.curso__body}>
                <p>
                  Si te gusta el mundo de la belleza, tratar con personas, asesorarlas para que su imagen mejore y estar creando constantemente, el estilismo es lo tuyo. ¿Quieres que sea tu profesión? Pues toma nota porque te explicamos qué estudiar para ser estilista profesional.
                  Se trata de una carrera laboral muy atractiva y excitante ya que es muy dinámica, creativa y satisfactoria dado que las personas que acudan a recibir tus servicios se mostrarán muy alegres y agradecidas, además son tareas muy variadas y nada monótonas y el trato con las personas.
                  Se trata de una carrera laboral con muchas salidas que permite trabajar en peluquerías, salones de belleza, hoteles, spa, centros wellness, a domicilio, etc. Tanto para otros como de manera independiente.
                </p>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className={styles.curso__footer}>
                <button type="submit" onClick={handleClickOpen1} className={styles.curso__button}> Inscribirse </button>
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
                  Para que crees tu imagen personal y tu propio negocio en la industria del Make Up
                  Aprenderás fundamentos del maquillaje, el set del maquillador profesional y técnicas básicas para crear looks glamurosos para cada rostro.
                  Dominaras la preparación de la piel, faciales , teoría del color, visagismo, maquillaje de ojos para el día, y la noche, y técnicas correctivas.
                  Aprenderás estilos vanguardistas y tendencia para  realizar maquillaje de novia, pieles radiantes, envejecidas y étnicas.
                </p>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className={styles.curso__footer}>
                <button onClick={handleClickOpen2} type="submit" className={styles.curso__button}> Inscribirse </button>
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
                  Con el curso sabrás cómo producir todo tipo de uñas acrílicas, y al término de 11 meses tendrás todo el conocimiento además de un certificado que te avalará como profesional, por lo que tendrás toda la capacidad y la confianza de comenzar tu propio negocio.
                </p>
                <Box className={styles.article__body}>
                  <h4>Incluye</h4>
                  <p>Material para trabajar en clase  y diploma </p>
                  <h5>Aprendes:</h5>
                  <ul>
                    <li>Preparacion de uñal natural</li>
                    <li>Adaptación de tips</li>
                    <li>Aplicación de uñas con tips</li>
                    <li>Técnica correcta de limado</li>
                    <li>Técnica de aplicación de Acrílico 4 pasos</li>
                    <li>Cómo hacer un retoque</li>
                    <li>Aplicación correcta de esmalte gel semipermanente</li>
                    <li>Retirar uñas  </li>
                    <li>
                      Formas de uñas: Stiletto, Bailarina, Almendra, cuadrada
                      encapsulados
                    </li>
                    <li>Efectos</li>
                    <li>Frech con tips</li>
                    <li>Decoración con pinceles</li>
                    <li>
                      Introducción mano alzada
                    </li>
                    <li>Listado de material para iniciar tu negocio</li>
                    <li>
                      Instrucciones para iniciar tu propio negocio , ( materiales , marcas, publicidad, estudio de mercado , empoderamiento costos , asesoramiento de negocios!!!!!! Y más....

                      /
                    </li>
                  </ul>

                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className={styles.curso__footer}>
                <button type="submit" onClick={handleClickOpen3} className={styles.curso__button}> Inscribirse </button>
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
                  Aprende a cortar cabello como las estilistas profesionales en tan solo 2 meses.
                  En nuestro curso de corte de cabello aprenderás diferentes tipos de corte para dama, caballero y niño.
                </p>
                <div className={styles.article__body}>
                  <h4>Programa de estudios</h4>
                  <ul>
                    <li>
                      Teoría de corte de cabello.
                    </li>
                    <li>Uso adecuado de herramientas.</li>
                    <li>Técnica de corte con tijera.</li>
                    <li>Técnica de corte con maquina.</li>
                  </ul>
                </div>
              </Box>
              <div className={styles.article__body}>
                <h4>Corte de dama:</h4>
                <p>Sólido horizontal, convexo, cóncavo, encapado en diferentes proyecciones, reconocimiento de las diferentes alturas de elevación, técnicay conocimiento de grados , tecnica corte bob , cola de pato entre otros.</p>
                <h4>Corte caballero:</h4>
                <p> Casquetes regular, corto, tipo militar, mohicano  perfilado uso de máquina delineadora etc... </p>
                <h4>Corte de niño: </h4>
                <p>Corte infantil, escolares, tipo hongo, mohicano, etc.</p>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Box className={styles.curso__footer}>
                <button type="submit" onClick={handleClickOpen} className={styles.curso__button}> Inscribirse </button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <FormDialog1 handleClickOpen={handleClickOpen} open={open1} handleClose={handleClose} />
      <FormDialog2 handleClickOpen={handleClickOpen} open={open2} handleClose={handleClose} />
      <FormDialog3 handleClickOpen={handleClickOpen} open={open3} handleClose={handleClose} />
      <FormDialog4 handleClickOpen={handleClickOpen} open={open} handleClose={handleClose} />
    </Layout>
  );
}

export default CursosComponent;
