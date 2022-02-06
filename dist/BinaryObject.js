"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryObject = void 0;
/**
 * @class
 */
class BinaryObject {
    constructor() {
        this.internalRaw = Buffer.alloc(0);
    }
    clone() {
        const clonedObject = new BinaryObject();
        clonedObject.internalRaw = this.raw;
        return clonedObject;
    }
    updateRaw(newValue) {
        this.internalRaw = newValue;
    }
    get raw() {
        return this.internalRaw;
    }
}
exports.BinaryObject = BinaryObject;
//# sourceMappingURL=BinaryObject.js.map