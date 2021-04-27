/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-filename-extension */
import { Box, Typography, Grid } from '@material-ui/core';
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
            <Typography className={styles.title}>
              MEJORA TUS HABILIDADES DE MAQUILLAJE  E INICIA LA CARRERA DE TUS SUEÑOS
            </Typography>
            <Typography variant="body2" className={styles.body}>
              Ya sea que desee iniciar su carrera como maquillador profesional o simplemente mejorar sus habilidades de aplicación personal.
            </Typography>
          </div>
        </div>
        <Box className={styles.main}>
          <div className={styles.container_main}>
            <Typography variant="h5" className={styles.title__main}>
              Academia de belleza que a nivelan tus habilidades
            </Typography>
          </div>
          <div className={styles.container_main}>
            <Typography className={styles.body__main}>
              Si desea un curso de belleza  que pueda completar cuando usted lo desee con compromiso y perseverancia. Nuestras clases de maquillaje están optimizadas para aprender desde todas las personas. Ya sea que sea un principiante total que quiera mejorar sus habilidades de maquillaje personal o un maquillador profesional en ascenso listo para lanzar su carrera, podemos ayudarlo.
            </Typography>
          </div>
        </Box>
      </Box>
      <Box>
        <CursosComponent />
      </Box>
      <Box>
        <Box className={styles.main}>
          <div className={styles.container_main}>
            <Typography variant="h5" className={styles.title__main}>
              Por que nuestros alumnos nos prefieren?
            </Typography>
          </div>
          <div className={styles.container_main}>
            <Grid container spacing={1}>
              <Grid item xs={12} lg={6}>
                <Box display="flex" className={styles.alumnos__container}>
                  <div>
                    <img src="/img/mujer1.png" />
                  </div>
                  <Typography variant="h6" color="initial" className={styles.alumnos__title}>
                    MARIA SAUCEDO
                  </Typography>
                  <Typography variant="h6" color="initial" className={styles.alumnos__subtitle}>
                    PERFECCIONA TU CURSO DE MAQUILLAJE PERSONAL
                  </Typography>
                  <Typography variant="body2" color="initial" className={styles.alumnos__text}>
                    He realizado dos cursos. Realmente lo recomiendo incluso si, como yo, eres un maquilladora experimentado. ¡Siempre hay espacio para aprender! la profesora lo explica todo de forma asombrosa, una gran variedad de modelos. ¡No puedo esperar para la próxima!
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Box display="flex" className={styles.alumnos__container}>
                  <div>
                    <img src="/img/mujer1.png" />
                  </div>
                  <Typography variant="h6" color="initial" className={styles.alumnos__title}>
                    KARLA MARTINEZ
                  </Typography>
                  <Typography variant="h6" color="initial" className={styles.alumnos__subtitle}>
                    PERFECCIONA TU CURSO DE MAQUILLAJE PERSONAL
                  </Typography>
                  <Typography variant="body2" color="initial" className={styles.alumnos__text}>
                    Me encantó este curso de maquillaje. Está construido lógicamente, es informativo, divertido y está lleno de contenido asombroso. Me encantó el hecho de que la profesora pidió a expertos de diferentes campos, como el cuidado de la piel y un especialista en cejas, que nos enseñaran las técnicas y la ciencia más actualizadas. Me encanta el estilo de explicacióny las guías que enseña paso a paso. Son tan detallados, fáciles de seguir y muy divertidos de ver. Honestamente, puedo recomendar este curso lo suficiente.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </div>
        </Box>
      </Box>
      <Box className={styles.afiliaciones__container}>
        <Typography variant="h5" color="initial" className={styles.title__main}>
          Nuestras Afilicaciones
        </Typography>
        <img src="/img/sep.png" className={styles.img__sep} />
      </Box>
    </Layout>
  );
}

export default IndexComponent;
