/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
import Link from 'next/link';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import styles from './CursosComponent.module.css';

function CursosComponent() {
  return (
    <div>
      <Grid container spacing={1} className={styles.container}>
        <Grid item xs={12}>
          <h3 className={styles.title}>
            Descubre Nuestros Cursos
          </h3>
        </Grid>
        <Grid item xs={12} className={styles.curso__container}>
          <div className={styles.articulo1}>
            <h3 className={styles.subtitulo}>
              Peluquería profesional
            </h3>
            <img src="/img/corte.png" />
          </div>
          <div className={styles.container__text}>
            <p className={styles.text}>
              Aprende a cortar cabello como las estilistas profesionales en tan solo 2 meses. En nuestro curso de corte de cabello aprenderás diferentes tipos de corte para dama, caballero y niño.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} className={styles.curso__container}>
          <div className={styles.articulo1}>
            <h3 className={styles.subtitulo}>
              Técnico en uñas
            </h3>
            <img src="/img/uñas.png" />
          </div>
          <div className={styles.container__text}>
            <p className={styles.text}>
              Con el curso sabrás cómo producir todo tipo de uñas acrílicas, y al término de 11 meses tendrás todo el conocimiento además de un certificado que te avalará como profesional, por lo que tendrás toda la capacidad y la confianza de comenzar tu propio negocio.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} className={styles.curso__container}>
          <div className={styles.articulo1}>
            <h3 className={styles.subtitulo}>
              Maquillista Profesional
            </h3>
            <img src="/img/maquillaje.png" />
          </div>
          <div className={styles.container__text}>
            <p className={styles.text}>
              Para que crees tu imagen personal y tu propio negocio en la industria del Make Up Aprenderás fundamentos del maquillaje, el set del maquillador profesional y técnicas básicas para crear looks glamurosos para cada rostro.
            </p>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Link href="/cursos">
            <Box className={styles.link__container}>
              <a className={styles.link}>
                {' '}
                Descubre mas
                <ChevronRightIcon
                  style={{
                    color: 'white',
                    fontSize: 30,
                    cursor: 'pointer',
                  }}
                />
              </a>

            </Box>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default CursosComponent;
