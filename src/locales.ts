export const availableLocales = ['en', 'es', 'ru']

export const isValidLocale = (locale: string) => availableLocales.some((cur) => cur === locale);
