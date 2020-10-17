import React from 'react';
import { Grid, ThemeProvider } from '@material-ui/core';
import CustonToolbar from '../Toolbar';
import Content from '../Content';
import IProducts from '../../models/Product';
import style from './MainPage.jss'
import ThemeContext from '../../Contexts/Theme';
import { myTheme, myDarkTheme } from '../../theme/myTheme'

const products: IProducts[] = [{ name: 'Produto de Teste', codigo: '12345676', img: '...' }];

const MainPage: React.FC = () => {
  const context = React.useContext(ThemeContext);

  const classes = style();

  const theme = context.isDarkTheme ? myDarkTheme : myTheme;

  return (<ThemeProvider theme={theme}>
    <Grid container direction='column' className={context.isDarkTheme ? classes.mainContainerDark : classes.mainContainer} spacing={2}>
      <Grid item style={{ outline: '1px solid green' }}>
        <CustonToolbar />
      </Grid>
      <Grid item style={{ outline: '1px solid red' }}>
        <Content products={products} />
      </Grid>
    </Grid>
  </ThemeProvider>);
}

export default MainPage;