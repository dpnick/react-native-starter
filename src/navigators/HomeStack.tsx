import { Feather } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme as useStyledTheme } from 'styled-components';
import { ThemeContext } from '../contexts/ThemeProvider';
import Home from '../pages/Home';

const HomeStack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  const { isDarkTheme, switchTheme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const { colors } = useStyledTheme();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name='Home'
        component={Home}
        options={() => ({
          headerTitle: t('home'),
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTitleStyle: {
            color: colors.text,
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => switchTheme()}>
              <Feather
                name={isDarkTheme ? 'sun' : 'moon'}
                size={24}
                color={colors.text}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </HomeStack.Navigator>
  );
}
