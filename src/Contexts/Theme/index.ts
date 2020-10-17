import React from 'react';
import { myTheme } from '../../theme/myTheme';

const ThemeContext = React.createContext({
  theme: myTheme,
  toggleTheme: () => { },
  isDarkTheme: false
});

export default ThemeContext;