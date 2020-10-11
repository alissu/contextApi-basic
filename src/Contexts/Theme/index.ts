import React from 'react';
import * as themes from './themes';

const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => { },
  isDarkTheme: false
});

export default ThemeContext;