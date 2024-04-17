"use strict";
/**
 * check if item is of specific type, throw err  if not
 * @param {string} itemName item name to display on error message
 * @param {*} item item to check type of
 * @param {Array<string> | string} type - type to match, if array passed match on of the array elements
 * @returns {boolean} true if matched otherwise throws error
 *
 * module was written in pure js, so this doesn't make too much sense with typescript
 * but still can help as typescript type checks don't work during runtime
 */
Object.defineProperty(exports, "__esModule", { value: true });
function checkParamType(itemName, item, type) {
    const itemType = typeof item;
    if (Array.isArray(type)) { //match on the the array item
        let matched = false;
        for (let t of type) {
            if (t === "array" || t === "Array") {
                if (Array.isArray(item))
                    matched = true;
            }
            else if (itemType === t)
                matched = true;
        }
        if (!matched)
            throw new TypeError(itemName + " must be one of " + type.join(", ") + ", received " + itemType);
    }
    else if ((type === "array" || type === "Array") && Array.isArray(item))
        return true;
    else if (itemType !== type)
        throw new TypeError(itemName + " must be an " + type + ", received " + itemType);
    return true;
}
exports.default = checkParamType;
