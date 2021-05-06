/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-filename-extension */
import { Box, Grid } from '@material-ui/core';
import React from 'react';
import Layout from '../Layout/Layout';
import CursosComponent from './CursosComponent';

import styles from './IndexComponent.module.css';

function IndexComponent() {
  return (
    <Layout title="Ross Make-up">
      <Box className={styles.container}>
        <div className={styles.header}>
          <div className={styles.card}>
            <h3 className={styles.title}>
              MEJORA TUS HABILIDADES DE MAQUILLAJE  E INICIA LA CARRERA DE TUS SUEÑOS
            </h3>
            <p className={styles.body}>
              Ya sea que desee iniciar su carrera como maquillador profesional o simplemente mejorar sus habilidades de aplicación personal.
            </p>
          </div>
        </div>
        <Box className={styles.main}>
          <div className={styles.container_main}>
            <h2 className={styles.title__main}>
              Academia de belleza que a nivelan tus habilidades
            </h2>
          </div>
          <div className={styles.container_main}>
            <p className={styles.body__main}>
              Si desea un curso de belleza  que pueda completar cuando usted lo desee con compromiso y perseverancia. Nuestras clases de maquillaje están optimizadas para aprender desde todas las personas. Ya sea que sea un principiante total que quiera mejorar sus habilidades de maquillaje personal o un maquillador profesional en ascenso listo para lanzar su carrera, podemos ayudarlo.
            </p>
          </div>
        </Box>
      </Box>
      <Box>
        <CursosComponent />
      </Box>
      <Box>
        <Box className={styles.main}>
          <div className={styles.container_main}>
            <h5 className={styles.title__main}>
              Por que nuestros alumnos nos prefieren?
            </h5>
          </div>
          <div className={styles.container_main}>
            <Grid container>
              <Grid item xs={12} lg={12} md={12}>
                <Box display="flex" className={styles.alumnos__container}>
                  <div>
                    <img src="testimonios/alumna-amairam.png" />
                  </div>
                  <h5 className={styles.alumnos__title}>
                    AIRAM AGUILAR
                  </h5>
                  <p variant="h6" color="initial" className={styles.alumnos__subtitle}>
                    PERFECCIONA TU CURSO DE MAQUILLAJE PERSONAL
                  </p>
                  <p variant="body2" color="initial" className={styles.alumnos__text}>
                    Recomiendo ampliamente al instituto ross ya que tengo la fortuna de estar inscrita en él. Ya que nos permite aprender y desarrollar muchas habilidades, asi como también nos brindan atención necesaria y apoyo de parte de la maestra y personal, para aprender nuevas cosas de clase tras clase, el instituto nos enseña a a salir adelante de diferentes maneras. El instituto es un lugar agradable, de confianza, y de gran ayuda y apoyo. Asi que es un orgullo el ser parte del instituto.
                  </p>
                </Box>
              </Grid>

              <Grid item xs={12} lg={12} md={12}>
                <Box display="flex" className={styles.alumnos__container}>
                  <img src="/testimonios/silvia-alumna.png" />
                  <h5 className={styles.alumnos__title}>
                    SILVIA HINOJOSA
                  </h5>
                  <p variant="h6" color="initial" className={styles.alumnos__subtitle}>
                    PERFECCIONA TU CURSO DE MAQUILLAJE PERSONAL
                  </p>
                  <p variant="body2" color="initial" className={styles.alumnos__text}>
                    Mi nombre es Silvia Minerva Hinojosa Morales estudio la Carrera de Estilismo en El Instituto de Belleza Ross el cual recomiendo al 100% ya que la Miss Cecy Castañón es una persona muy preparada en la materia la cual nos impulsa que podemos llegar muy lejos si nosotros nos proponemos y siempre impulsando a ser nuestras propias jefas hoy por hoy agradezco al Instituto Ross la oportunidad de brindarme la enseñanza del estilismo ya que estoy recibiendo frutos económicos de mi trabajo. Gracias infinitas gracias y hago la recomendación extensiva a toda persona sin distinción de género que se inscriban a Instituto Ross no se arrepentirán
                  </p>
                </Box>
              </Grid>
            </Grid>
          </div>
        </Box>
      </Box>
      <Box className={styles.afiliaciones__container}>
        <h4 color="initial" className={styles.title__main}>
          Nuestras Afilicaciones
        </h4>
        <div className={styles.img__sep} />
      </Box>
    </Layout>
  );
}

export default IndexComponent;
