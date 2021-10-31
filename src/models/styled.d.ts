import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: number;

    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
    };
  }
}
