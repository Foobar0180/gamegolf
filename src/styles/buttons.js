import * as Colors from './colors';
import * as Outlines from './outlines';
import * as Sizing from './sizing';
import * as Typography from './typography';

export const button = {
  alignItems: 'center',
  justifyContent: 'center',
  padding: Sizing.layout.x20,
  borderRadius: Outlines.borderRadius.base,
  backgroundColor: Colors.themeColors.primary,
  color: Colors.neutralColors.white,
  width: Sizing.layout.x250,
  textTransform: Typography.uppercase,
  ...Typography.fontSize.x4,
};

export const buttonText = {
  ...Typography.fontSize.x3,
  ...Typography.fontWeight.semibold,
  color: Colors.neutralColors.white,
};

export const rounded = {
  ...button,
  ...Typography.uppercase,
  borderRadius: Outlines.borderRadius.max,
};

export const linkButton = {
  color: Colors.themeColors.primary,
};

const opacity = (state) => {
  const opacity = state.pressed ? 0.65 : 1;
  return { opacity };
};

export const applyOpacity = (style) => {
  return (state) => {
    return {
      ...style,
      ...opacity(state),
    };
  };
};