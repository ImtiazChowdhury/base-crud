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
type paramTypes = "string" | "boolean" | "number" | "object" | "Symbol" | "undefined" | "null" | "array" | "Array";
declare function checkParamType(itemName: string, item: any, type: paramTypes | paramTypes[]): boolean;
export default checkParamType;
