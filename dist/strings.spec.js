"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const strings_1 = require("./strings");
(0, globals_1.describe)('toLocale()', () => {
    (0, globals_1.test)('when passed a key and locale, returns a string', () => {
        // Arrange
        const stringKey = 'UNABLE_TO_CREATE_FROM';
        const locale = 'enUS';
        const expectedResult = 'bintools was not able to create object';
        // Act
        const result = (0, strings_1.toLocale)(stringKey, locale);
        // Assert
        (0, globals_1.expect)(result).toEqual(expectedResult);
    });
    (0, globals_1.test)('when locale is not found, throw an error', () => {
        // Arrange
        const stringKey = 'UNABLE_TO_CONVERT';
        const locale = 'abCD';
        const expectedError = 'The locale abCD';
        // Act
        (0, globals_1.expect)(() => (0, strings_1.toLocale)(stringKey, locale)).toThrowError(expectedError);
    });
    (0, globals_1.test)('when key is not found, throw an error', () => {
        // Arrange
        const stringKey = 'TEST_ERROR_PLEASE_DO_NOT_CHANGE';
        const locale = 'enUS';
        const expectedError = 'The key TEST_ERROR';
        // Act
        (0, globals_1.expect)(() => (0, strings_1.toLocale)(stringKey, locale)).toThrowError(expectedError);
    });
});
//# sourceMappingURL=strings.spec.js.map