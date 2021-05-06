/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import { Box } from '@material-ui/core';
import React from 'react';
import Layout from '../Layout/Layout';
import styles from './QuienesSomos.module.css';

function QuienesSomos() {
  return (
    <Layout title="Quienes Somos">
      <Box className={styles.header}>
        <h2 className={styles.header__title}>Quienes Somos</h2>
      </Box>
      <Box className={styles.container}>
        <h3 className={styles.title}> INSTITUTO DE CAPACITACIÓN DE BELLEZA Y ESTILISMO ROSS</h3>
        <p className={styles.text}> La mejor academia de belleza profesional de Ciudad Victoria Tamaulipas. Incorporada</p>
        <p className={styles.text}>
          a la confederación de estilismo con registro S.E.P
          {' '}
          {' '}
          <b>28PBT0280T.</b>
        </p>
        <p className={styles.text}>
          {' '}
          Con nosotros podrás estudiar la carrera de
          <b>Estlismo y Bienestar Personal</b>
          <b>Diseño de imagen y Peluquería profesional, maquillista profesional, colorista capilar profesional, técnico en uñas postizas y decoración.</b>
        </p>
        <h4> Misión </h4>
        <p className={styles.text}>Nuestra misión es darte una formación que te garantice al éxito profesional y un desarrollo excepcional, nuestras carreras y planes de estudio están creados para personas como tú, que siempre gustan ser los mejores</p>
        <p className={styles.text}>Al estudiar con nosotros tendráslos siguientes beneficios:</p>

        <ul>
          <li>Estudios con validez oficial Sep. Elige los   materiales que mejor se ajusten a tus necesidades y   presupuesto. Asegura excelente nivel de empleo.</li>
          <li> Bolsa de trabajo con excelentes oportunidades </li>
          <li>
            Orientación y asesoría para iniciar tu propio negocio
          </li>

        </ul>
      </Box>

    </Layout>
  );
}

export default QuienesSomos;
