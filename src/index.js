const strings = require('./strings')

function isCompatible(input) {
    if (input instanceof Buffer | 
        input instanceof Int8Array |
        input instanceof Uint8Array |
        input instanceof Uint8ClampedArray) {
        return true
    }
    return false
}

function toBuffer(input) {
    if (!isCompatible(input)) {
        throw new Error(strings.toLocale('UNABLE_TO_CONVERT', 'enUS'))
    }

    if (input instanceof Buffer) {
        return input
    }
}

module.exports = {
    isCompatible,
    toBuffer
}