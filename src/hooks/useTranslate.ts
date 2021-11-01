import * as Localization from 'expo-localization';
import I18n from 'i18n-js';

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
  const setLanguage = () => {
    let language = Localization.locale.split('-')[0] as Language;
    if (!Object.values(Language).includes(language)) {
      language = Language.EN;
    }
    I18n.translations = { [language]: translationGetters[language]() };
    I18n.locale = language;
  };

  return {
    setLanguage,
    langue: I18n.locale,
    t: I18n.t,
  };
}
