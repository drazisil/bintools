import { describe, test, expect } from '@jest/globals'
import { BinTools } from './index'
import { BinaryObject } from './BinaryObject'

describe('BinaryObject', () => {
    describe('clone()', () => {
        test('when called, returns a new BinaryObject', () => {
            // Arrange
            const startingObject = new BinaryObject()
            const expectedResult = true

            // Act
            const clonedObject = startingObject.clone()
            const result = BinTools.isInstanceOf((clonedObject))

            // Assert
            expect(result).toEqual(expectedResult)
        })

        test('does not return the same object as self', () => {
            // Arrange
            const startingObject = new BinaryObject()
            const expectedObject = new BinaryObject()
            const expectedResult = false

            // Act
            const clonedObject = startingObject.clone()

            // Assert
            expect(clonedObject === expectedObject).toEqual(expectedResult)
        })

        test('has the same values as the source object', () => {
            // Arrange
            const startingObject = new BinaryObject()
            startingObject.updateRaw(Buffer.from([0x01, 0x02, 0x03]))
            const expectedObject = new BinaryObject()
            expectedObject.updateRaw(Buffer.from([0x01, 0x02, 0x03]))


            // Act
            const clonedObject = startingObject.clone()

            // Assert
            expect(clonedObject.raw).toEqual(startingObject.raw)
        })        
    })

})