export const transformToQuery = (query: string): string => {
  return query
    .trim()
    .toLowerCase()
    .split(" ")
    .join("+");
};
