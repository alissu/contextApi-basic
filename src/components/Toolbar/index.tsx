import React from 'react';
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import GreenSwitch from '../Switch';
import ThemeContext from '../../Contexts/Theme';

const CustonToolbar: React.FC = () => {
  const context = React.useContext(ThemeContext);

  console.log('consumer context', context.theme);

  return (<AppBar position='static'>
    <Toolbar>
      <Grid container justify='space-between' alignItems='center'>
        <Grid item>
          <Typography variant='h5'>
            Aqui pode vir um drawer
          </Typography>
        </Grid>
        <Grid item>
          <Grid container alignItems='center'>
            <Grid item>
              <Typography variant='body1'>
                Tema escuro:
              </Typography>
            </Grid>
            <Grid item>
              <GreenSwitch checked={context.isDarkTheme} onChange={context.toggleTheme} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>);
}

export default CustonToolbar;