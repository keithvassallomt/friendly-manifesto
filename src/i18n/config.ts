import enGB from './en-GB.json';
import enUS from './en-US.json';

export const languages = {
  'en-GB': { label: 'English (UK)', flagCode: 'gb' },
  'en-US': { label: 'English (US)', flagCode: 'us' },
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en-GB';

const ui: Record<Lang, Record<string, string>> = {
  'en-GB': enGB,
  'en-US': enUS,
};

export function t(lang: Lang, key: keyof typeof enGB): string {
  return ui[lang]?.[key] ?? ui[defaultLang][key];
}
