export const objectToArray = (obj: Object) =>
  Object.keys(obj).map(key => ({
    id: key,
    ...obj[key]
  }));
