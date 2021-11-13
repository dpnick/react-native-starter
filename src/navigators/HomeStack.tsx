import { Feather } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme as useStyledTheme } from 'styled-components';
import { ThemeContext } from '../contexts/ThemeProvider';
import Home from '../pages/Home';

const HomeStack = createNativeStackNavigator();
const fullIconOffset = 44; // icon size + padding

export default function HomeStackNavigator() {
  const { isDarkTheme, switchTheme } = useContext(ThemeContext);
  const translateAnim = useRef(new Animated.Value(0)).current;
  const { colors } = useStyledTheme();
  const { t } = useTranslation();

  const toggleThemeMode = () => {
    Animated.spring(translateAnim, {
      toValue: fullIconOffset,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) switchTheme();
      Animated.spring(translateAnim, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    });
  };

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
            <Animated.View
              style={{ transform: [{ translateX: translateAnim }] }}
            >
              <TouchableOpacity onPress={() => toggleThemeMode()}>
                <Feather
                  name={isDarkTheme ? 'sun' : 'moon'}
                  size={24}
                  color={colors.text}
                />
              </TouchableOpacity>
            </Animated.View>
          ),
        })}
      />
    </HomeStack.Navigator>
  );
}
