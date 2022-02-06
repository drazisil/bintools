"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinTools = void 0;
const BinaryObject_1 = require("./BinaryObject");
const strings_1 = require("./strings");
/**
 * @class
 */
class BinTools {
    static isCompatible(input) {
        if (input instanceof BinaryObject_1.BinaryObject ||
            input instanceof Buffer ||
            input instanceof Int8Array ||
            input instanceof Uint8Array ||
            input instanceof Uint8ClampedArray ||
            input instanceof Array) {
            return true;
        }
        return false;
    }
    static from(input) {
        if (input instanceof Buffer) {
            const result = new BinaryObject_1.BinaryObject();
            result.updateRaw(Buffer.from(input));
            return result;
        }
        if (input instanceof Array) {
            const result = new BinaryObject_1.BinaryObject();
            result.updateRaw(Buffer.from(input));
            return result;
        }
        if (input instanceof Int8Array) {
            const result = new BinaryObject_1.BinaryObject();
            result.updateRaw(Buffer.from(input));
            return result;
        }
        if (input instanceof Uint8Array) {
            const result = new BinaryObject_1.BinaryObject();
            result.updateRaw(Buffer.from(input));
            return result;
        }
        if (input instanceof Uint8ClampedArray) {
            const result = new BinaryObject_1.BinaryObject();
            result.updateRaw(Buffer.from(input));
            return result;
        }
        throw new Error((0, strings_1.toLocale)('UNABLE_TO_CREATE_FROM', 'enUS'));
    }
    static isInstanceOf(input) {
        return (input instanceof BinaryObject_1.BinaryObject);
    }
}
exports.BinTools = BinTools;
//# sourceMappingURL=BinTools.js.map