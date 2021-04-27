/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import Link from 'next/link';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import styles from './CursosComponent.module.css';

function CursosComponent() {
  return (
    <div>
      <Grid container spacing={1} className={styles.container}>
        <Grid item xs={12}>
          <Typography variant="h5" className={styles.title}>
            Descubre Nuestros Cursos
          </Typography>
        </Grid>
        <Grid item xs={12} className={styles.curso__container}>
          <Box className={styles.curso_1}>
            <div className={styles.articulo1}>
              <Typography variant="subtitle1" color="initial" className={styles.subtitulo}>
                Corte de Cabello
              </Typography>
              <img src="/img/corte.png" />
            </div>
            <div className={styles.container__text}>
              <Typography variant="body2" color="initial" className={styles.text}>
                Ya sea que sea un principiante total que quiera mejorar sus habilidades de maquillaje personal o un maquillador profesional en ascenso listo para lanzar su carrera, podemos ayudarlo.
              </Typography>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} className={styles.curso__container}>
          <Box className={styles.curso_1}>
            <div className={styles.articulo1}>
              <Typography variant="subtitle1" color="initial" className={styles.subtitulo}>
                Uñas
              </Typography>
              <img src="/img/uñas.png" />
            </div>
            <div className={styles.container__text}>
              <Typography variant="body2" color="initial" className={styles.text}>
                Ya sea que sea un principiante total que quiera mejorar sus habilidades de maquillaje personal o un maquillador profesional en ascenso listo para lanzar su carrera, podemos ayudarlo.
              </Typography>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} className={styles.curso__container}>
          <Box className={styles.curso_1}>
            <div className={styles.articulo1}>
              <Typography variant="subtitle1" color="initial" className={styles.subtitulo}>
                Maquillaje
              </Typography>
              <img src="/img/maquillaje.png" />
            </div>
            <div className={styles.container__text}>
              <Typography variant="body2" color="initial" className={styles.text}>
                Ya sea que sea un principiante total que quiera mejorar sus habilidades de maquillaje personal o un maquillador profesional en ascenso listo para lanzar su carrera, podemos ayudarlo.
              </Typography>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Link href="/cursos">
            <Box className={styles.link__container}>
              <a className={styles.link}> Descubre mas</a>
              <ChevronRightIcon
                style={{
                  color: 'white',
                  fontSize: 30,
                  cursor: 'pointer',
                }}
              />
            </Box>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default CursosComponent;
