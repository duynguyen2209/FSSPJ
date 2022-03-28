import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';
import English from './locales/eng/translation.json';
import Vienames from './locales/vie/translation.json';

// the translations
const Languages = ['vie', 'eng']


i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        resources:{
            eng: {
                translation: English
            },
            vie: {
                translation: Vienames
            }
        },
        fallbackLng: 'vie',
        debug: true,
        whitelist:Languages,
    });

export default i18n;