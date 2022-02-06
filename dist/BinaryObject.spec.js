"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const index_1 = require("./index");
const BinaryObject_1 = require("./BinaryObject");
(0, globals_1.describe)('BinaryObject', () => {
    (0, globals_1.describe)('clone()', () => {
        (0, globals_1.test)('when called, returns a new BinaryObject', () => {
            // Arrange
            const startingObject = new BinaryObject_1.BinaryObject();
            const expectedResult = true;
            // Act
            const clonedObject = startingObject.clone();
            const result = index_1.BinTools.isInstanceOf((clonedObject));
            // Assert
            (0, globals_1.expect)(result).toEqual(expectedResult);
        });
        (0, globals_1.test)('does not return the same object as self', () => {
            // Arrange
            const startingObject = new BinaryObject_1.BinaryObject();
            const expectedObject = new BinaryObject_1.BinaryObject();
            const expectedResult = false;
            // Act
            const clonedObject = startingObject.clone();
            // Assert
            (0, globals_1.expect)(clonedObject === expectedObject).toEqual(expectedResult);
        });
        (0, globals_1.test)('has the same values as the source object', () => {
            // Arrange
            const startingObject = new BinaryObject_1.BinaryObject();
            startingObject.updateRaw(Buffer.from([0x01, 0x02, 0x03]));
            const expectedObject = new BinaryObject_1.BinaryObject();
            expectedObject.updateRaw(Buffer.from([0x01, 0x02, 0x03]));
            // Act
            const clonedObject = startingObject.clone();
            // Assert
            (0, globals_1.expect)(clonedObject.raw).toEqual(startingObject.raw);
        });
    });
});
//# sourceMappingURL=BinaryObject.spec.js.map