import { Platform } from 'react-native';
import { systemWeights } from 'react-native-typography';

import * as Colors from './colors';

export const fontSize = {
  x1: {
    fontSize: 13,
  },
  x2: {
    fontSize: 14,
  },
  x3: {
    fontSize: 16,
  },
  x4: {
    fontSize: 19,
  },
  x5: {
    fontSize: 24,
  },
  x6: {
    fontSize: 32,
  },
};

export const fontWeight = {
  thin: {
    ...systemWeights.thin,
  },
  light: {
    ...systemWeights.light,
  },
  regular: {
    ...systemWeights.regular,
  },
  semibold: {
    ...systemWeights.semibold,
  },
  bold: {
    ...systemWeights.bold,
  },
};

export const letterSpacing = {
  x2: 2,
  x3: 3,
};

export const lineHeight = {
  x1: {
    lineHeight: 20,
  },
  x2: {
    lineHeight: 22,
  },
  x3: {
    lineHeight: 24,
  },
  x4: {
    lineHeight: 26,
  },
  x5: {
    lineHeight: 32,
  },
  x6: {
    lineHeight: 38,
  },
};

export const header = {
  x1: {
    ...fontSize.x1,
    ...lineHeight.x1,
    ...fontWeight.bold,
  },
  x2: {
    ...fontSize.x2,
    ...lineHeight.x2,
    ...fontWeight.bold,
  },
  x3: {
    ...fontSize.x3,
    ...lineHeight.x3,
    ...fontWeight.bold,
  },
  x4: {
    ...fontSize.x4,
    ...lineHeight.x4,
    ...fontWeight.bold,
  },
  x5: {
    ...fontSize.x5,
    ...lineHeight.x5,
    ...fontWeight.bold,
  },
  x6: {
    ...fontSize.x6,
    ...lineHeight.x6,
    ...fontWeight.bold,
  },
};

export const subheader = {
  x1: {
    ...fontSize.x1,
    ...lineHeight.x1,
    ...fontWeight.semibold,
  },
  x2: {
    ...fontSize.x2,
    ...lineHeight.x2,
    ...fontWeight.semibold,
  },
  x3: {
    ...fontSize.x3,
    ...lineHeight.x3,
    ...fontWeight.semibold,
  },
  x4: {
    ...fontSize.x4,
    ...lineHeight.x4,
    ...fontWeight.semibold,
  },
  x5: {
    ...fontSize.x5,
    ...lineHeight.x5,
    ...fontWeight.semibold,
  },
  x6: {
    ...fontSize.x6,
    ...lineHeight.x6,
    ...fontWeight.semibold,
  },
};

export const body = {
  x1: {
    ...fontSize.x1,
    ...lineHeight.x1,
    ...fontWeight.regular,
    color: Colors.neutralColors.s800,
  },
  x2: {
    ...fontSize.x2,
    ...lineHeight.x2,
    ...fontWeight.regular,
    color: Colors.neutralColors.s800,
  },
  x3: {
    ...fontSize.x3,
    ...lineHeight.x3,
    ...fontWeight.regular,
    color: Colors.neutralColors.s800,
  },
  x4: {
    ...fontSize.x4,
    ...lineHeight.x4,
    ...fontWeight.regular,
    color: Colors.neutralColors.s800,
  },
  x5: {
    ...fontSize.x5,
    ...lineHeight.x5,
    ...fontWeight.regular,
    color: Colors.neutralColors.s800,
  },
  x6: {
    ...fontSize.x6,
    ...lineHeight.x6,
    ...fontWeight.regular,
    color: Colors.neutralColors.s800,
  },
};

export const uppercase = {
  textTransform: 'uppercase',
};

const monospaceFontFamily = Platform.select({
  ios: 'Menlo',
  android: 'monospace',
});

export const monospace = {
  base: {
    fontFamily: monospaceFontFamily,
    letterSpacing: letterSpacing.x30,
  },
};