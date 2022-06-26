import React from 'react';
import {Text, StyleSheet, Platform, TextStyle} from 'react-native';

import {FONTSIZE} from '../utils/themes';
import type {TextProps} from '../utils/types';

type Style = {
  mini?: TextStyle;
  base?: TextStyle;
  small?: TextStyle;
  normal?: TextStyle;
  medium?: TextStyle;
  large?: TextStyle;
  xlarge?: TextStyle;
  xxlarge?: TextStyle;
  xxxlarge?: TextStyle;
  center?: TextStyle;
  left?: TextStyle;
  right?: TextStyle;
  bold?: TextStyle;
  regular?: TextStyle;
  semibold?: TextStyle;
  lightbold?: TextStyle;
  light200?: TextStyle;
  color?: TextStyle;
};

function CustomText(props: TextProps): JSX.Element {
  const {
    // font sizes
    mini,
    base,
    small,
    normal,
    medium,
    large,
    xlarge,
    xxlarge,
    xxxlarge,
    // font weight
    regular,
    bold,
    semibold,
    lightbold,
    light200,
    // others
    color,
    left,
    right,
    center,
    fontFamily,
    style,
    children,
    ...rest
  } = props;

  return (
    <Text
      style={StyleSheet.flatten([
        style && style,
        center && styles.center,
        left && styles.left,
        right && styles.right,
        bold && styles.bold,
        regular && styles.regular,
        mini && styles.mini,
        base && styles.base,
        small && styles.small,
        normal && styles.normal,
        medium && styles.medium,
        large && styles.large,
        xlarge && styles.xlarge,
        xxlarge && styles.xxlarge,
        xxxlarge && styles.xxxlarge,
      ])}
      {...rest}
      allowFontScaling={false}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create<Style>({
  mini: {
    fontSize: FONTSIZE.mini,
    lineHeight: Platform.OS === 'android' ? 0 : 0,
  },
  base: {
    fontSize: FONTSIZE.base,
  },
  small: {
    fontSize: FONTSIZE.small,
  },
  normal: {
    fontSize: FONTSIZE.normal,
  },
  medium: {
    fontSize: FONTSIZE.medium,
  },
  large: {
    fontSize: FONTSIZE.xlarge,
    lineHeight: Platform.OS === 'android' ? 25 : 0,
  },
  xlarge: {
    fontSize: FONTSIZE.xlarge,
    lineHeight: Platform.OS === 'android' ? 25 : 0,
  },
  xxlarge: {
    fontSize: FONTSIZE.xxlarge,
    lineHeight: Platform.OS === 'android' ? 30 : 0,
  },
  xxxlarge: {
    fontSize: FONTSIZE.xxxlarge,
    lineHeight: Platform.OS === 'android' ? 35 : 0,
  },
  center: {
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  left: {
    textAlign: 'left',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
  },
  right: {
    textAlign: 'right',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
  },
  bold: {
    fontFamily: 'Montserrat-Bold',
  },
  regular: {
    fontFamily: 'Montserrat-Regular',
  },
  semibold: {
    fontFamily: 'Montserrat-SemiBold',
  },
  lightbold: {
    fontFamily: 'Montserrat-Medium',
  },
  light200: {
    fontFamily: 'Montserrat-Light',
  },
});

export default React.memo(CustomText);
