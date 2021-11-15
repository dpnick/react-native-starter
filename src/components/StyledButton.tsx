import React from 'react';
import styled from 'styled-components/native';
import {
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  space,
  SpaceProps,
} from 'styled-system';
import StyledText from './StyledText';

const ButtonContainer = styled.TouchableOpacity<
  ColorProps & SpaceProps & BorderProps
>(compose(color, space, border));

interface StyledButtonProps {
  onPress: () => void;
  text: string;
  outline?: boolean;
}

export default function StyledButton({
  onPress,
  text,
  outline = true,
}: StyledButtonProps) {
  return (
    <ButtonContainer
      onPress={onPress}
      color='primary'
      padding={8}
      borderRadius={8}
      borderColor='primary'
      borderWidth={outline ? 1 : 0}
      bg={outline ? 'transparent' : 'primary'}
    >
      <StyledText color={outline ? 'primary' : 'white'}>{text}</StyledText>
    </ButtonContainer>
  );
}
