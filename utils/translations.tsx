import { useRouter } from 'next/router';
import React from 'react';

export const translations: { [key: string]: any } = {
  "Hello, It's Me": {
    en: `Hello, It's Me`,
    ua: 'Привіт, Я',
  },
  "Maksym Kopych": {
    en: "Maksym Kopych",
    ua: "Максим Копич"
  }

}

export const T: React.FC<{ phrase: string }> = ({ phrase }) => {
  const router = useRouter();

  if (translations[phrase] && router?.locale) {
    return <>{translations[phrase][router.locale]}</>;
  }

  return <>{phrase}</>;
};

export const findT = (phrase: string, lang: string | undefined): string => {
  if (translations[phrase] && lang) {
    return translations[phrase][lang];
  }

  return phrase;
};
