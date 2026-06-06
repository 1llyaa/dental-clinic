import cs from './cs.json';
import en from './en.json';
import de from './de.json';
import it from './it.json';

export type Locale = 'cs' | 'en' | 'de' | 'it';
export type Translations = typeof cs;

const localeData: Record<Locale, Partial<Translations>> = { cs, en, de, it };

export function getTranslations(locale: Locale = 'cs'): Translations {
  if (locale === 'cs') return cs;
  return { ...cs, ...(localeData[locale] ?? {}) } as Translations;
}
