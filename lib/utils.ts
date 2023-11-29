export const imageSizes = (m: string, t?: string, d?: string) => {
  return d
    ? `(min-width: 1280px) ${d}, `
    : "" + t
      ? `(min-width: 768px) ${t}, `
      : "" + m;
};

export const cloudinaryImgUrl = (endpoint: string) =>
  "https://res.cloudinary.com/dftuawd1d/image/upload/v1701055748/onbit/" +
  endpoint;
