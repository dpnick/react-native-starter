import { DefaultTheme } from 'styled-components/native';

const lightTheme: DefaultTheme = {
  space: [0, 4, 8, 16, 32, 64],
  colors: {
    primary: '#009B77',
    secondary: 'gray',
    background: 'whitesmoke',
    text: 'black',
  },
};

const darkTheme: DefaultTheme = {
  space: [0, 4, 8, 16, 32, 64],
  colors: {
    primary: '#C3447A',
    secondary: 'gray',
    background: '#090d13',
    text: 'white',
  },
};

enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export { lightTheme, darkTheme, Theme };
