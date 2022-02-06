"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toLocale = void 0;
const enUS_1 = __importDefault(require("./locales/enUS"));
const locales = {
    enUS: enUS_1.default
};
/**
 * @param {string} locale
 */
function toLocale(stringKey, locale) {
    if (typeof locales[locale] === "undefined") {
        throw new Error(`The locale ${locale} was not found!`);
    }
    if (typeof locales[locale][stringKey] === "undefined") {
        throw new Error(`The key ${stringKey} was not found the ${locale} locale!`);
    }
    return locales[locale][stringKey];
}
exports.toLocale = toLocale;
//# sourceMappingURL=strings.js.map