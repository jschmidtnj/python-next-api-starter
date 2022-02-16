export const locales: string[] = ['en'];

export const capitalizeOnlyFirstLetter = (elem: string): string => {
  return elem.charAt(0).toUpperCase() + elem.slice(1);
};

export const capitalizeFirstLetter = (elem: string): string => {
  return elem.split(' ').map(capitalizeOnlyFirstLetter).join(' ');
};

export const sleep = (ms: number): Promise<void> => {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
};
