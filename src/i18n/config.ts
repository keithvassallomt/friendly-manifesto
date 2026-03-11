import enGB from './en-GB.json';
import enUS from './en-US.json';
import frFR from './fr-FR.json';
import esES from './es-ES.json';
import itIT from './it-IT.json';

export const languages = {
  'en-GB': { label: 'English (UK)', flagCode: 'gb' },
  'en-US': { label: 'English (US)', flagCode: 'us' },
  'fr-FR': { label: 'Français', flagCode: 'fr' },
  'es-ES': { label: 'Español', flagCode: 'es' },
  'it-IT': { label: 'Italiano', flagCode: 'it' },
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en-GB';

const ui: Record<Lang, Record<string, string>> = {
  'en-GB': enGB,
  'en-US': enUS,
  'fr-FR': frFR,
  'es-ES': esES,
  'it-IT': itIT,
};

export function t(lang: Lang, key: keyof typeof enGB): string {
  return ui[lang]?.[key] ?? ui[defaultLang][key];
}

export function tOptional(lang: Lang, key: string): string | undefined {
  return ui[lang]?.[key];
}
