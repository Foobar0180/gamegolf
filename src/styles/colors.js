export const palette = {
  blue: '#004E98',
  indigo: '#9900FF',
  purple: '#A67DB8',
  pink: '#ED9798',
  red: '#DB5461',
  orange: '#FF6700',
  yellow: '#FEFFA5',
  green: '#B4DC7F',
  teal: '#538896',
  cyan: '#8EF9F3',
};

export const neutralColors = {
  white: '#FFFFFF',
  s100: '#EFEFEF',
  s200: '#D9D9D9',
  s300: '#CCCCCC',
  s400: '#B7B7B7',
  s500: '#999999',
  s600: '#666666',
  s700: '#434343',
  black: '#000000',
};

export const themeColors = {
  background: palette.white,
  foreground: palette.black,
  primary: palette.indigo,
  secondary: palette.purple,
  tertiary: palette.pink,
  success: palette.green,
  danger: palette.red,
  warning: palette.yellow,
  info: palette.teal,
  white: neutralColors.white,
  black: neutralColors.black, 
  gray: neutralColors.s400,
  darkGray: neutralColors.s700,
};

const applyOpacity = (hexColor, opacity) => {
  const red = hexColor.slice(1, 3);
  const green = hexColor.slice(3, 5);
  const blue = hexColor.slice(5, 7);

  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
};

export const transparent = {
  clear: 'rgba(255, 255, 255, 0)',
  lightGray: applyOpacity(neutralColors.s300, 0.4),
  darkGray: applyOpacity(neutralColors.s700, 0.8),
};

export const shadeColor = (hexColor, percent) => {
  const redGamut = hexColor.slice(1, 3);
  const greenGamut = hexColor.slice(3, 5);
  const blueGamut = hexColor.slice(5, 7);

  const rgb =  [redGamut, greenGamut, blueGamut];

  const toShadedGamut = (gamut) => {  
    return Math.floor(Math.min(gamut * (1 + percent / 100), 255));
  };

  const toHex = (gamut) => {
    return gamut.toString(16).length === 1 
      ? `0${gamut.toString(16)}` 
      : gamut.toString(16);
  };

  const shadedRGB = rgb.map(toShadedGamut);
  const shadedHex = shadedRGB.map(toHex);

  const hexString = shadedHex.join('');

  return `#${hexString}`;
};
