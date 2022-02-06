/**
 * @class
 */
export class BinaryObject {
    private internalRaw = Buffer.alloc(0)

    public clone() {
        const clonedObject = new BinaryObject()
        clonedObject.internalRaw = this.raw
        return clonedObject
    }

    public updateRaw(newValue: any) {
        this.internalRaw = newValue
    }

    public get raw() {
        return this.internalRaw
    }

 }
