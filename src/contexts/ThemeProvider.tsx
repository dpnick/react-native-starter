import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import { StorageKeys } from '../models/storage';
import { darkTheme, lightTheme } from '../Theme';

export const ThemeContext = createContext({
  isDarkTheme: true,
  switchTheme: () => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    AsyncStorage.getItem(StorageKeys.USE_DARK_THEME).then((useDarkMode) => {
      let result = colorScheme === 'dark';
      if (useDarkMode !== null) {
        result = JSON.parse(useDarkMode);
      }
      setIsDark(result);
    });
  }, []);

  const switchTheme = async () => {
    setIsDark(!isDark);
    await AsyncStorage.setItem(
      StorageKeys.USE_DARK_THEME,
      JSON.stringify(!isDark)
    );
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme: isDark,
        switchTheme,
      }}
    >
      <StyledThemeProvider theme={isDark ? darkTheme : lightTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
