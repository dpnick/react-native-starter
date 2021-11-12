import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as en from './assets/translations/en.json';
import * as fr from './assets/translations/fr.json';
import { StorageKeys } from './src/models/storage';

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async (callback) => {
    let result = await AsyncStorage.getItem(StorageKeys.SELECTED_LANG);
    if (!result) {
      result = Localization.locale.split('-')[0];
    }
    return callback(result);
  },
  init: () => {},
  cacheUserLanguage: async (locale) => {
    await AsyncStorage.setItem(StorageKeys.SELECTED_LANG, locale);
  },
};

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    resources,
    load: 'currentOnly',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    compatibilityJSON: 'v3',
  });
export default i18n;
