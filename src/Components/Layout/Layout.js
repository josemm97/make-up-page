/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import Head from 'next/head';
import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import Link from 'next/link';
import CustomizedMenus from '../Assets/CustomizedMenus';
import styles from './Layout.module.css';

function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Grid container className={styles.container}>
        <Grid item xs={12} className={styles.navbar}>
          <CustomizedMenus />
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
        <Grid item xs={12}>
          <Box className={styles.footer}>
            <Box className={styles.footer__container}>
              <Box className={styles.footer__container__artile1}>
                <Box>
                  <Typography variant="h6" color="initial" className={styles.footer__title}>
                    Ubicacion
                  </Typography>
                  <Typography className={styles.footer__text}>
                    Boulevard Luis Echeverria Alvarez Guadalupe 
                    Mainero CP 87100 Ciudad Victoria Tamaulipas.
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" color="initial" className={styles.footer__title}>
                    Redes sociales
                  </Typography>
                  <Box>
                    <Link href="https://www.facebook.com/" target="_blank">
                      <a target="_blank">
                        <img src="/img/facebook.png" />
                      </a>
                    </Link>
                    <Link href="https://www.twitter.com/" target="_blank">
                      <a target="_blank">
                        <img src="/img/twitter.png" />
                      </a>
                    </Link>
                    <Link href="https://www.gmail.com/" target="_blank">
                      <a target="_blank">
                        <img src="/img/gmail.png" />
                      </a>
                    </Link>
                  </Box>
                </Box>
                <Box>
                  <Typography variant="h6" color="initial" className={styles.footer__title}>
                    Telefono
                  </Typography>
                  <Typography className={styles.footer__text}>
                    +52 834 144 9289
                  </Typography>
                </Box> 
              </Box>  
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Layout;

/*

*/
