const { describe, test, expect } = require('@jest/globals')
const bintools = require('./index')


describe('isCompatible()', () => {
    test('when passed a buffer, returns true', () => {
        // Arrange
        const input = Buffer.alloc(4)
        const expectedResult = true

        // Act
        const result = bintools.isCompatible(input)

        // Assert
        expect(result).toEqual(expectedResult)
    })

    test('when passed a string, returns false', () => {
        // Arrange
        const input = ''
        const expectedResult = false

        // Act
        const result = bintools.isCompatible(input)

        // Assert
        expect(result).toEqual(expectedResult)
    })

    test('when passed a Int8Array, returns true', () => {
        // Arrange
        const input = new Int8Array()
        const expectedResult = true

        // Act
        const result = bintools.isCompatible(input)

        // Assert
        expect(result).toEqual(expectedResult)
    })

    test('when passed a UInt8Array, returns true', () => {
        // Arrange
        const input = new Uint8Array()
        const expectedResult = true

        // Act
        const result = bintools.isCompatible(input)

        // Assert
        expect(result).toEqual(expectedResult)
    })

    test('when passed a UInt8, returns true', () => {
        // Arrange
        const input = new Uint8ClampedArray()
        const expectedResult = true

        // Act
        const result = bintools.isCompatible(input)

        // Assert
        expect(result).toEqual(expectedResult)
    })

})

describe('toBuffer()', () => {
    test('when passed a buffer, returns a buffer', () => {
        // Arrange
        const input = Buffer.from([0x01, 0x02, 0x03])
        const expectedResult = Buffer.from([0x01, 0x02, 0x03])

        // Act
        const result = bintools.toBuffer(input)

        // Assert
        expect(result).toEqual(expectedResult)
    })


    test('when passed a number, throws an error', () => {
        // Arrange
        const input = 4
        const expectedError = 'bintools was unable to convert'

        // Act
        expect(() => bintools.toBuffer(input)).toThrowError(expectedError)
    })
})