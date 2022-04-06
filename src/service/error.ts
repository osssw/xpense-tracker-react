export const getErrorString = (errors: { [key: string]: string }): string => {
  return Object.entries(errors)
    .map(([key, value]) => `${key} ${value}`)
    .reduce((acc, value) => `${acc} ${value}`, "");
};
