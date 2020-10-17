import React from 'react';
import ThemeContext from './Contexts/Theme';
import MainPage from './components/MainPage';
import { ThemeProvider } from '@material-ui/core';
import { myTheme, myDarkTheme } from './theme/myTheme';

interface IState {
  theme: any;
  toggleTheme: () => void;
  isDarkTheme: boolean;
}

class App extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      theme: myTheme,
      toggleTheme: this.toggleTheme,
      isDarkTheme: false
    }
  }

  toggleTheme = () => {
    this.setState({
      theme:
        this.state.theme === myDarkTheme ?
          myTheme :
          myDarkTheme,
      isDarkTheme: !this.state.isDarkTheme
    });
  }

  render() {
    return (<ThemeContext.Provider value={this.state}>
      <MainPage />
    </ThemeContext.Provider>);
  }
}

export default App;
