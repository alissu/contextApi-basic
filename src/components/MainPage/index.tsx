import React from 'react';
import { Grid } from '@material-ui/core';
import CustonToolbar from '../Toolbar';
import Content from '../Content';
import IProducts from '../../models/Product';
import style from './MainPage.jss'

const products: IProducts[] = [{ name: 'Produto de Teste', codigo: '12345676', img: '...' }];

const MainPage: React.FC = () => {
  const classes = style();

  return (
    <Grid container direction='column' className={classes.mainContainer} spacing={2}>
      <Grid item style={{ outline: '1px solid green' }}>
        <CustonToolbar />
      </Grid>
      <Grid item style={{ outline: '1px solid red' }}>
        <Content products={products} />
      </Grid>
    </Grid>
  );
}

export default MainPage;