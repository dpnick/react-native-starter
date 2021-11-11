import React from 'react';
import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableOpacity`
  padding: 12px;
  border-radius: 10px;
  border: ${(props) => `1px solid ${props.theme.colors.primary}`};
`;

const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.primary};
`;

export default function StyledButton({
  onPress,
  text,
}: {
  onPress: () => void;
  text: string;
}) {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
}
