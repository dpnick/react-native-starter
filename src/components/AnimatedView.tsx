import React, { useEffect } from 'react';
import { ViewProps } from 'react-native';
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import styled, { useTheme } from 'styled-components/native';
import {
  color,
  ColorProps,
  compose,
  flex,
  flexbox,
  FlexboxProps,
  FlexProps,
  space,
  SpaceProps,
} from 'styled-system';
import usePrevious from '../hooks/usePrevious';

const StyledView = styled.View<
  ColorProps & SpaceProps & FlexProps & FlexboxProps
>(compose(color, space, flex, flexbox));

const AnimatedViewRoot = Animated.createAnimatedComponent(StyledView);

export default function AnimatedView({
  children,
  ...props
}: ViewProps & ColorProps & SpaceProps & FlexProps & FlexboxProps) {
  const { background } = useTheme().colors;
  const previousBg = usePrevious(background);
  const anim = useSharedValue(0);

  useEffect(() => {
    anim.value = 0;
  }, [background]);

  const animatedStyle = useAnimatedStyle(() => {
    anim.value = withTiming(1, { duration: 300, easing: Easing.linear });
    return {
      backgroundColor: interpolateColor(
        anim.value,
        [0, 1],
        [previousBg || background, background]
      ),
    };
  }, [background]);

  return (
    <AnimatedViewRoot {...props} children={children} style={animatedStyle} />
  );
}
