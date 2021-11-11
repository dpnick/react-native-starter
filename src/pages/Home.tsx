import React from 'react';
import { useTranslation } from 'react-i18next';
import Styled from 'styled-components/native';
import StyledButton from '../components/StyledButton';
import { StyledTheme } from '../models/theme';
import { Language } from '../models/translation';

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
  margin-bottom: 12px;
  color: ${(props: StyledTheme) => props.theme.colors.secondary};
`;

export default function Home() {
  const { t, i18n } = useTranslation();

  const updateLanguage = () => {
    const nextLng = i18n.language === Language.EN ? Language.FR : Language.EN;
    i18n.changeLanguage(nextLng);
  };

  return (
    <Container>
      <MainText>{t('title')}</MainText>
      <SecondText>@dpnick_</SecondText>
      <StyledButton onPress={updateLanguage} text={t('change-language')} />
    </Container>
  );
}
