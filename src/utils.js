export  const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomDecilmalNum = () => {
  const decimal = Math.random() * 10;
  return decimal.toFixed(1);
};

const Keys = {
  ESC: 'Esc',
  ESCAPE: 'Escape',
};

export const isEscEvent = (evt) => evt.key === Keys.ESC || evt.key === Keys.ESCAPE;

