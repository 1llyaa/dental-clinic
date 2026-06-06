import cs from './cs.json';

export type Locale = 'cs' | 'en' | 'de' | 'it';
export type Translations = typeof cs;

// When EN/DE/IT translations are ready, import and add them here.
// Until then all locales fall back to Czech.
const localeData: Record<Locale, Partial<Translations>> = {
  cs,
  en: {},
  de: {},
  it: {}
};

export function getTranslations(locale: Locale = 'cs'): Translations {
  if (locale === 'cs') return cs;
  return { ...cs, ...(localeData[locale] ?? {}) } as Translations;
}
