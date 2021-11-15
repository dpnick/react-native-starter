import { Feather } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useCallback, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { useTheme as useStyledTheme } from 'styled-components/native';
import { ThemeContext } from '../contexts/ThemeProvider';
import Home from '../pages/Home';

const HomeStack = createNativeStackNavigator();
const fullIconOffset = 44; // icon size + padding

export default function HomeStackNavigator() {
  const { isDarkTheme, switchTheme } = useContext(ThemeContext);
  const { colors } = useStyledTheme();
  const { t } = useTranslation();
  const anim = useSharedValue(0);

  const toggleThemeMode = useCallback(() => {
    anim.value = withSequence(
      withTiming(fullIconOffset, undefined, (isFinished) => {
        if (isFinished) {
          runOnJS(switchTheme)();
        }
      }),
      withTiming(0)
    );
  }, [switchTheme]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: anim.value }],
    };
  });

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
            <Animated.View style={animatedStyle}>
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
