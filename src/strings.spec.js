const { describe, test, expect } = require('@jest/globals')
const strings = require('./strings')

describe('toLocale()', () => {
    test('when passed a key and locale, returns a string', () => {
        // Arrange
        const stringKey = 'UNABLE_TO_CONVERT'
        const locale = 'enUS'
        const expectedResult = 'bintools was unable to convert'

        // Act
        const result = strings.toLocale(stringKey, locale)

        // Assert
        expect(result).toEqual(expectedResult)
    })

    test('when locale is not found, throw an error', () => {
        // Arrange
        const stringKey = 'UNABLE_TO_CONVERT'
        const locale = 'abCD'
        const expectedError = 'The locale abCD'

        // Act
        expect(() => strings.toLocale(stringKey, locale)).toThrowError(expectedError)
    })

    test('when key is not found, throw an error', () => {
        // Arrange
        const stringKey = 'TEST_ERROR_PLEASE_DO_NOT_CHANGE'
        const locale = 'enUS'
        const expectedError = 'The key TEST_ERROR'

        // Act
        expect(() => strings.toLocale(stringKey, locale)).toThrowError(expectedError)
    })
})
