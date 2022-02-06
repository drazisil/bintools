const { describe, test, expect} = require('@jest/globals')
const { BinTools } = require('.')
const { BinaryObject } = require('./BinaryObject')

describe('BinaryObject', () => {
    describe('clone()', () => {
        test('when called, returns a new BinaryObject', () => {
            // Arrange
            const startingObject = new BinaryObject()
            const expectedResult = true

            // Act
            const clonedObject = startingObject.clone()
            const result = BinTools.isInstanceOf((result))

            // Assert
            expect(result).toEqual(expectedResult)
        })
    })
})