const enUS = require('./locales/enUS')

const locales = {
    enUS
}

/**
 * @param {string} locale
 */
function toLocale(stringKey, locale) {
    if (typeof locales[locale] === "undefined") {
        throw new Error(`The locale ${locale} was not found!`)
    }
    if (typeof locales[locale][stringKey] === "undefined") {
        throw new Error(`The key ${stringKey} was not found the ${locale} locale!`)
    }
    return locales[locale][stringKey]
}

module.exports = {
    toLocale
}