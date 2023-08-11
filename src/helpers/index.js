export const hash = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(2);

export const classNames = (...classes) => classes.filter(Boolean).join(" ");
