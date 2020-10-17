import React from 'react';
import { AppBar, Grid, Toolbar, Typography, Switch } from '@material-ui/core';
import ThemeContext from '../../Contexts/Theme';

const CustonToolbar: React.FC = () => {
  const context = React.useContext(ThemeContext);

  return (<AppBar position='static' color='secondary'> {/* //TODO: evoluir */}
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
              <Switch checked={context.isDarkTheme} onChange={context.toggleTheme} color='default' />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>);
}

export default CustonToolbar;