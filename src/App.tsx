import React from 'react';
import ThemeContext from './Contexts/Theme';
import * as themes from './Contexts/Theme/themes';
import MainPage from './components/MainPage';

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
      <MainPage />
    </ThemeContext.Provider>);
  }
}

export default App;
