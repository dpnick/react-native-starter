import { Feather } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Dispatch, SetStateAction } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import Home from '../pages/Home';
import { Theme } from '../Theme';

const HomeStack = createNativeStackNavigator();

export default function HomeStackNavigator({
  setTheme,
  theme,
}: {
  setTheme: Dispatch<SetStateAction<Theme>>;
  theme: Theme;
}) {
  const { colors } = useTheme();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name='Home'
        component={Home}
        options={() => ({
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTitleStyle: {
            color: colors.text,
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() =>
                setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
              }
            >
              <Feather
                name={theme === Theme.LIGHT ? 'moon' : 'sun'}
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
