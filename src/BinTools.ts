import { BinaryObject } from "./BinaryObject";
import { toLocale} from './strings';

/**
 * @class
 */
export class BinTools {
    static isCompatible(input: any) {
        if (input instanceof BinaryObject ||
            input instanceof Buffer ||
            input instanceof Int8Array ||
            input instanceof Uint8Array ||
            input instanceof Uint8ClampedArray ||
            input instanceof Array) {
            return true;
        }
        return false;
    }

    static from(input: any) {
        if (input instanceof Buffer) {
            const result = new BinaryObject();
            result.updateRaw(Buffer.from(input));
    
            return result;
        }

        if (input instanceof Array) {
            const result = new BinaryObject();
            result.updateRaw(Buffer.from(input));
    
            return result;
        }

        if (input instanceof Int8Array) {
            const result = new BinaryObject();
            result.updateRaw(Buffer.from(input));
    
            return result;
        }

        if (input instanceof Uint8Array) {
            const result = new BinaryObject();
            result.updateRaw(Buffer.from(input));
    
            return result;
        }

        if (input instanceof Uint8ClampedArray) {
            const result = new BinaryObject();
            result.updateRaw(Buffer.from(input));
    
            return result;
        }

        throw new Error(toLocale('UNABLE_TO_CREATE_FROM', 'enUS'));
    }

    static isInstanceOf(input: any) {
        return (input instanceof BinaryObject)
    }
}
