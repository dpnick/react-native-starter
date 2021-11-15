import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Linking, TouchableOpacity } from 'react-native';
import AnimatedView from '../components/AnimatedView';
import StyledButton from '../components/StyledButton';
import StyledText from '../components/StyledText';
import { StorageKeys } from '../models/storage';
import { Language } from '../models/translation';

/*
You can import any variables from your env.json file like :
import { EXAMPLE } from '../../env.json';
*/

const TWITTER_NAME = '@dpnick_';

export default function Home() {
  const { t, i18n } = useTranslation();

  const updateLanguage = async () => {
    const nextLng = i18n.language === Language.EN ? Language.FR : Language.EN;
    i18n.changeLanguage(nextLng);
    await AsyncStorage.setItem(StorageKeys.SELECTED_LANG, nextLng);
  };

  const openTwitter = async () => {
    const url = 'https://twitter.com/dpnick_';
    const supported = await Linking.canOpenURL('https://twitter.com/dpnick_');
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  return (
    <AnimatedView flex={1} justifyContent='center' alignItems='center'>
      <StyledText
        margin={10}
        fontSize={18}
        textAlign='center'
        marginBottom={12}
        color='primary'
      >
        {t('title')}
      </StyledText>
      <TouchableOpacity onPress={openTwitter}>
        <StyledText
          fontSize={18}
          textAlign='center'
          marginBottom={12}
          color='secondary'
        >
          {TWITTER_NAME}
        </StyledText>
      </TouchableOpacity>
      <StyledButton onPress={updateLanguage} text={t('change-language')} />
    </AnimatedView>
  );
}
