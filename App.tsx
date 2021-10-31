import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';
import useTranslate from './src/hooks/useTranslate';
import Navigation from './src/navigators';
import { darkTheme, lightTheme, Theme } from './src/Theme';

export default function App() {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
  const { setLanguage } = useTranslate();

  useEffect(() => {
    setLanguage();
  }, []);

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme === Theme.LIGHT ? lightTheme : darkTheme}>
        <Navigation setTheme={setTheme} theme={theme} />
      </ThemeProvider>
      <StatusBar style='auto' />
    </SafeAreaProvider>
  );
}
