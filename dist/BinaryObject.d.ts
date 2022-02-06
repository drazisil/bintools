/// <reference types="node" />
/**
 * @class
 */
export declare class BinaryObject {
    private internalRaw;
    clone(): BinaryObject;
    updateRaw(newValue: any): void;
    get raw(): Buffer;
}
