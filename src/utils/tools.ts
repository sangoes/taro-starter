/**
 * 对象 to 数组 {0: 'a', 1: 'b'} -> ['a', 'b']
 * @param obj
 */
export function objToArray(obj: any): any[] {
  const result = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      let numKey = Number(key);
      if (numKey && typeof numKey === "number") {
        const element = obj[key];
        result.push(element);
      }
    }
  }
  return result;
}
