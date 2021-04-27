/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import Head from 'next/head';
import React from 'react';
import { Box, Grid } from '@material-ui/core';
import CustomizedMenus from '../Assets/CustomizedMenus';
import styles from './Layout.module.css';

function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Grid container>
        <Grid item xs={12} className={styles.navbar}>
          <CustomizedMenus />
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
}

export default Layout;
