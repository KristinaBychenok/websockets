export const jsonConvert = (obj) => {
  if (typeof obj !== "object" || obj === null) {
    return String(obj);
  }

  const result = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = jsonConvert(obj[key]);
    }
  }

  return result;
};
