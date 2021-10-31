import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
  borderRadius: 8,

  colors: {
    primary: '#009B77',
    secondary: 'gray',
    background: 'whitesmoke',
    text: 'black',
  },
};

const darkTheme: DefaultTheme = {
  borderRadius: 8,

  colors: {
    primary: '#C3447A',
    secondary: 'gray',
    background: 'black',
    text: 'white',
  },
};

enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export { lightTheme, darkTheme, Theme };
