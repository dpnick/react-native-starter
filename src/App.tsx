import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ThemeProvider from './contexts/ThemeProvider';
import Navigation from './navigators';

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar style='auto' />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
