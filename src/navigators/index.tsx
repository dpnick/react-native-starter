import { NavigationContainer } from '@react-navigation/native';
import React, { Dispatch, SetStateAction } from 'react';
import { Theme } from '../Theme';
import HomeStackNavigator from './HomeStack';

export default function Navigation({
  setTheme,
  theme,
}: {
  setTheme: Dispatch<SetStateAction<Theme>>;
  theme: Theme;
}) {
  return (
    <NavigationContainer>
      <HomeStackNavigator setTheme={setTheme} theme={theme} />
    </NavigationContainer>
  );
}
