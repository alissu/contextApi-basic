import React from 'react';
import { Grid, AppBar, Toolbar, Typography, Switch, withStyles, Card, Avatar, IconButton, CardMedia, CardContent, CardActions } from '@material-ui/core';

import style from './App.jss'
import { green } from '@material-ui/core/colors';
import { CardHeader } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

interface IProducts {
  name: string;
  codigo: string;
  img: any;
};

const themes = {
  light: {
    foreground: '#000000',
    background: '#ffffff'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  }
}

const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => { },
  isDarkTheme: false
});

const products: IProducts[] = [{ name: 'Produto de Teste', codigo: '12345676', img: '...' }];

const GreenSwitch = withStyles({ //TODO: melhorar 
  switchBase: {
    color: green[300],
    '&$checked': {
      color: green[500],
    },
    '&$checked + $track': {
      backgroundColor: green[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

interface IState {
  theme: any;
  toggleTheme: () => void;
  isDarkTheme: boolean;
}

class App extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
      isDarkTheme: false
    }
  }

  toggleTheme = () => {
    this.setState({
      theme:
        this.state.theme === themes.dark ?
          themes.light :
          themes.dark,
      isDarkTheme: !this.state.isDarkTheme
    });
  }

  render() {
    return (<ThemeContext.Provider value={this.state}>
      <Page />
    </ThemeContext.Provider>);
  }
}

// const App: React.FC = () => {

//   const [myTheme, setMyTheme] = React.useState({
//     theme: themes.light,
//     toggleTheme: () => { },
//     isDarkTheme: false
//   });

//   const handleChangeTheme = () => {
//     console.log('state', myTheme.theme);
//     console.log('const themes', themes.dark);

//     myTheme.theme === themes.dark ?
//       setMyTheme({ ...myTheme, theme: themes.light, isDarkTheme: false }) :
//       setMyTheme({ ...myTheme, theme: themes.dark, isDarkTheme: true });
//   }

//   return (<ThemeContext.Provider value={myTheme}>
//     <Page />
//   </ThemeContext.Provider>
//   );
// }

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

interface IContentProps {
  products: IProducts[];
}

const Content: React.FC<IContentProps> = props => {
  const context = React.useContext(ThemeContext);

  return (<Grid container justify='space-around' alignItems='baseline' style={{ backgroundColor: context.theme.background, color: context.theme.foreground }}>
    {props.products.map(product => {
      return (<Grid item xs={4} style={{ backgroundColor: context.theme.background, color: context.theme.foreground }}>
        <Card style={{ backgroundColor: context.theme.background, color: context.theme.foreground }}>
          <CardHeader
            avatar={<Avatar> T </Avatar>}
            action={<IconButton>
              <MoreVertIcon />
            </IconButton>}
            title={product.name}
            subheader={product.codigo}
            style={{ backgroundColor: context.theme.background, color: context.theme.foreground }}
          />
          <CardMedia
            image={product.img}
            title={product.name}
            style={{ backgroundColor: context.theme.background, color: context.theme.foreground }}
          />
          <CardContent style={{ backgroundColor: context.theme.background, color: context.theme.foreground }}>
            <Typography variant='body1'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Incidunt vero totam, eos reprehenderit sunt corporis officiis voluptate numquam
              eligendi praesentium amet error. Similique magnam aperiam delectus adipisci debitis sunt provident?
          </Typography>
          </CardContent>
          <CardActions style={{ backgroundColor: context.theme.background, color: context.theme.foreground }}>
            <IconButton onClick={() => alert('produto favoritado')}
              aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>);
    })}
  </Grid>
  );
}

const Page: React.FC = () => {
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

export default App;
