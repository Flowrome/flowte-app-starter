export const objectToQuery = (query: {
  [key: string]: number | boolean | string;
}) => {
  return encodeURI(
    `?${Object.keys(query)
      .map((key) => `${key}=${encodeURIComponent(query[key])}`)
      .join("&")}`
  );
};
