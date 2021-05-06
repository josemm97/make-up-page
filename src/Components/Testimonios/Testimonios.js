/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-filename-extension */
import { Box, Grid } from '@material-ui/core';
import React from 'react';
import Layout from '../Layout/Layout';
import styles from './Testimonios.module.css';

function Testimonios() {
  return (
    <Layout title="Testimonios">
      <Box className={styles.header}>
        <h4 className={styles.header__title}> Testimonios</h4>
      </Box>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box className={styles.testimonio__container}>
            <img src="/testimonios/erika-testimonio.png" alt="testimonio1" />
            <h2>Erika Rios</h2>
            <p className={styles.text}>
              Recomiendo 100% al instituto Ross ya que es una escuela que te garantiza que vas aprender todo lo que realizamos es 90% práctico te brindan una buena atención tanto su personal como la maestra tiene una maestra de calidad ya que siempre está
              ahí para despejar cualquier duda que se te presente y siempre te está alimentando a echarle ganas a salir adelante a qué digas no puedo te motiva mucha para que lleves a la práctica todo lo que estás aprendiendo avía estudiado en otra escuela pero no sé compara con está por eso estoy urgullosa de estar estudiando en el instituto Ross.
            </p>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className={styles.testimonio__container}>
            <img src="/testimonios/griselda-testimonio.png" alt="testimonio1" />
            <h2>Griselda Torres</h2>
            <p className={styles.text}>
              Recomiendo ampliamente el instituto de belleza Ross ya que cuenta con una muy buena maestra, nos trasmite todos sus conocimientos, enseñandonos de la mejor manera y alentándonos  a ser unas grandes profesionistas.
            </p>
            <p className={styles.text}>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.
            </p>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className={styles.testimonio__container}>
            <img src="/testimonios/emily-testimonio.png" alt="testimonio1" />
            <h2>Emily Garza</h2>
            <p className={styles.text}>
              Yo soy una mujer que le facina el mundo de belleza es por eso que decidi  formar parte del alumnado del instituto de belleza ross por que he aprendido y estoy aprendiendo  tecnicas nuevas y me encanta la forma en la que enseñan  y explican es por eso que con orgullo digo que formo parte del mejor instituto de belleza por que es una de las mejores escuelas de belleza
            </p>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className={styles.testimonio__container}>
            <img src="/testimonios/aidee-testimonio.png" alt="testimonio1" />
            <h2>Aidee Hernández</h2>
            <p className={styles.text}>
              Es un orgullo formar parte del instituto Ross. Soy una mujer que le gusta salir adelante y aprender cosas nuevas día a día. Desde que formo parte del alumnado de esta institución puedo decir que he logrado desarrollar muchas habilidades que ni yo misma conocía de mi. Por eso es que es muy importante mencionar que es aquí donde he logrado desarrollarme como emprendedora deceo llevar a cabo el sueño de poner una estética y se que lo podré lograr ya que he adquirido muchas técnicas y conocimientos que la maestra nos ha enseñado. Ella es una persona que le pone mucho empeño a las cosas y no solo nos transmite sus conocimientos si no también nos alienta a salir adelante y luchar por nuestras metas siendo mujeres en desarrollo profesional en el mundo del estilismo. Escuelas de estilismo hay muchas pero con orgullo puedo decir que yo elegí la mejor.
            </p>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Testimonios;
