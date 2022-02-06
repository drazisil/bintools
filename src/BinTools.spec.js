const { describe, test, expect } = require('@jest/globals');
const { BinTools, BinaryObject } = require('./index');

describe('isInstanceOf()', () => {
    test('when passed an instance of BinaryObject, return true', () => {
        // Arrange
        const input = new BinaryObject();
        const expectedResult = true;

        // Act
        const result = BinTools.isInstanceOf(input);

        // Assert
        expect(result).toEqual(expectedResult);
    });

    test('when passed anything that is not an instance of BinaryObject, return false', () => {
        // Arrange
        const input = new Number();
        const expectedResult = false;

        // Act
        const result = BinTools.isInstanceOf(input);

        // Assert
        expect(result).toEqual(expectedResult);

    });
});
describe('isCompatible()', () => {
    test('when passed a BinaryObject, return true', () => {
        // Arrange
        const input = new BinaryObject();
        const expectedResult = true;

        // Act
        const result = BinTools.isCompatible(input);

        // Assert
        expect(result).toEqual(expectedResult);
    });

    test('when passed a buffer, returns true', () => {
        // Arrange
        const input = Buffer.alloc(4);
        const expectedResult = true;

        // Act
        const result = BinTools.isCompatible(input);

        // Assert
        expect(result).toEqual(expectedResult);
    });

    test('when passed a string, returns false', () => {
        // Arrange
        const input = '';
        const expectedResult = false;

        // Act
        const result = BinTools.isCompatible(input);

        // Assert
        expect(result).toEqual(expectedResult);
    });

    test('when passed a Int8Array, returns true', () => {
        // Arrange
        const input = new Int8Array();
        const expectedResult = true;

        // Act
        const result = BinTools.isCompatible(input);

        // Assert
        expect(result).toEqual(expectedResult);
    });

    test('when passed a UInt8Array, returns true', () => {
        // Arrange
        const input = new Uint8Array();
        const expectedResult = true;

        // Act
        const result = BinTools.isCompatible(input);

        // Assert
        expect(result).toEqual(expectedResult);
    });

    test('when passed a Uint8ClampedArray, returns true', () => {
        // Arrange
        const input = new Uint8ClampedArray();
        const expectedResult = true;

        // Act
        const result = BinTools.isCompatible(input);

        // Assert
        expect(result).toEqual(expectedResult);
    });

    test('when passed an array, returns true', () => {
        // Arrange
        const input = [0x01, 0x02, 0x03];
        const expectedResult = true;

        // Act
        const result = BinTools.isCompatible(input);

        // Assert
        expect(result).toEqual(expectedResult);
    });


});
describe('from()', () => {
    test('when passed a buffer, returns a BinaryObject', () => {
        // Arrange
        const input = Buffer.from([0x01, 0x02, 0x03]);
        const expectedResult = true;

        // Act
        const result = BinTools.from(input);

        // Assert
        expect(BinTools.isInstanceOf(result)).toEqual(true);
    });


    test('when passed a Int8Array, returns a buffer', () => {
        // Arrange
        const input = Int8Array.from([0x01, 0x02, 0x03]);
        const expectedResult = true;

        // Act
        const result = BinTools.from(input);

        // Assert
        expect(BinTools.isInstanceOf(result)).toEqual(expectedResult);
    });


    test('when passed a Uint8Array, returns a buffer', () => {
        // Arrange
        const input = Uint8Array.from([0x01, 0x02, 0x03]);
        const expectedResult = true;

        // Act
        const result = BinTools.from(input);

        // Assert
        expect(BinTools.isInstanceOf(result)).toEqual(expectedResult);
    });

    test('when passed a Uint8ClampedArray, returns a buffer', () => {
        // Arrange
        const input = Uint8ClampedArray.from([0x01, 0x02, 0x03]);
        const expectedResult = true;

        // Act
        const result = BinTools.from(input);

        // Assert
        expect(BinTools.isInstanceOf(result)).toEqual(expectedResult);
    });

    test('when passed a Array, returns a buffer', () => {
        // Arrange
        const input = [0x01, 0x02, 0x03];
        const expectedResult = true;

        // Act
        const result = BinTools.from(input);

        // Assert
        expect(BinTools.isInstanceOf(result)).toEqual(expectedResult);
    });

    test('when passed a number, throws an error', () => {
        // Arrange
        const input = 4;
        const expectedError = 'bintools was not able to create';

        // Act
        expect(() => BinTools.from(input)).toThrowError(expectedError);
    });
});
