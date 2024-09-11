// i18n
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// languages
import * as resources from './resources';

// --------------------------------------------------------------------

const ns = Object.keys(Object.values(resources)[0]);
export const defaultNS = ns[0];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ns,
    defaultNS,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      ...Object.entries(resources).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: value,
        }),
        {},
      ),
    },
    compatibilityJSON: 'v3',
  });

  export default i18n
