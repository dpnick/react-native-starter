import React from 'react';
import Styled from 'styled-components/native';
import useTranslate from '../hooks/useTranslate';
import { StyledTheme } from '../models/theme';

/*
You can import any variables from your env.json file like :
import { EXAMPLE } from '../../env.json';
*/

const Container = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props: StyledTheme) => props.theme.colors.background};
`;
const MainText = Styled.Text`
  font-size: 20px;
  text-align: center;
  margin: 10px;
  color: ${(props: StyledTheme) => props.theme.colors.primary};
`;
const SecondText = Styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${(props: StyledTheme) => props.theme.colors.secondary};
`;

export default function Home() {
  const { t } = useTranslate();

  return (
    <Container>
      <MainText>{t('title')}</MainText>
      <SecondText>@dpnick_</SecondText>
    </Container>
  );
}
