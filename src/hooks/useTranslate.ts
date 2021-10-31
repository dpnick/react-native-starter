import * as Localization from 'expo-localization';
import I18n from 'i18n-js';
import * as en from '../../assets/translations/en.json';
import * as fr from '../../assets/translations/fr.json';

enum Language {
  FR = 'fr',
  EN = 'en',
}

const translationGetters = {
  // lazy loaded file
  en: () => require('../../assets/translations/en.json'),
  fr: () => require('../../assets/translations/fr.json'),
};

export default function useTranslation() {
  const setLanguage = (lang?: Language) => {
    let language = Localization.locale.split('-')[0] as Language;
    console.log(language);
    if (!Object.values(Language).includes(language)) {
      language = Language.EN;
    }
    console.log(language);
    I18n.translations = { en, fr };
    I18n.locale = language;
    I18n.fallbacks = true;
    I18n.defaultLocale = Language.EN;
  };

  return {
    setLanguage,
    langue: I18n.locale,
    t: I18n.t,
  };
}
