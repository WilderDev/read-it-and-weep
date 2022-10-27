export const objectToArray = (obj: Object) =>
  Object.keys(obj).map(key => obj[key]);
