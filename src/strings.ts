import enUS from './locales/enUS'

const locales: Record<string, Record<string, string>> = {
    enUS
}

/**
 * @param {string} locale
 */
export function toLocale(stringKey: string, locale: string) {
    if (typeof locales[locale] === "undefined") {
        throw new Error(`The locale ${locale} was not found!`)
    }
    if (typeof locales[locale][stringKey] === "undefined") {
        throw new Error(`The key ${stringKey} was not found the ${locale} locale!`)
    }
    return locales[locale][stringKey]
}
