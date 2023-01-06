import { StyleSheet } from 'react-native';

import * as Colors from './colors';

export const borderRadius = {
  base: 10,
  small: 5,
  large: 20,
  max: 9999,
};

export const borderWidth = {
  base: 2,
  hairline: StyleSheet.hairlineWidth,
  thin: 1,
  thick: 3,
};

export const shadow = {
  base: {
    shadowColor: Colors.neutralColors.s400,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
};