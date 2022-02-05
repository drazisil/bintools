const { BinaryObject } = require("./BinaryObject");
const strings = require('./strings');

/**
 * @class
 */
class BinTools {
    static isCompatible(input) {
        if (input instanceof BinaryObject |
            input instanceof Buffer |
            input instanceof Int8Array |
            input instanceof Uint8Array |
            input instanceof Uint8ClampedArray |
            input instanceof Array) {
            return true;
        }
        return false;
    }

    static from(input) {
        if (!BinTools.isCompatible(input)) {
            throw new Error(strings.toLocale('UNABLE_TO_CREATE_FROM', 'enUS'));
        }

        if (input instanceof Buffer) {
            const result = new BinaryObject();
            result.raw = Buffer.from(input);
    
            return Object.freeze(result);
        }

        if (input instanceof Array) {
            const result = new BinaryObject();
            result.raw = Buffer.from(input);
    
            return Object.freeze(result);
        }

        if (input instanceof Int8Array) {
            const result = new BinaryObject();
            result.raw = Buffer.from(input);
    
            return Object.freeze(result);
        }

        if (input instanceof Uint8Array) {
            const result = new BinaryObject();
            result.raw = Buffer.from(input);
    
            return Object.freeze(result);
        }

        if (input instanceof Uint8ClampedArray) {
            const result = new BinaryObject();
            result.raw = Buffer.from(input);
    
            return Object.freeze(result);
        }
    }

    static isInstanceOf(input) {
        console.log(input)
        console.log((new BinaryObject()))
        return (input instanceof BinaryObject)
    }
}

module.exports = {
    BinTools
}
