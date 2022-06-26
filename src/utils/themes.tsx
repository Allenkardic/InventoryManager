import {Dimensions, Platform, StatusBar} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import type {
  SizesConfig,
  ColorsConfig,
  CurrencyConfig,
  ImagesConfig,
} from './types';

const {width, height}: {width: number; height: number} =
  Dimensions.get('window');
const screenWidth: number = width < height ? width : height;
const screenHeight: number = width < height ? height : width;

export const SIZE: object = {
  screenWidth,
  screenHeight,
};

export const COLORS: ColorsConfig = {
  //base color
  primary: '#032e90',
  secondary: '#e4e8e5',
  tertiary: '#032e90',
  success: '#219653',
  error: '#fe3b30',
  yellow: '#fff9da',
  descText: '#121515',
  blue: '#032e90',
  inputGrey: '#DDDDDD',
  placeholderGrey: '#0A0A0A80',

  //neutral
  black: '#060606',
  white: '#ffffff',
  red: '#cc0200',

  //color variations
  darkGray: '#5E5F62',
  midGrey: '#6A6969',
  lightGrey: '#ABAFB3',
  iconGrey: '#d5d8d9',
  smokeWhite: '#f5f5f5',
  lightWhite: '#fafafa',
  helperGray: '#767486',
};

export const HP: any = hp;
export const WP: any = wp;

export const SIZES: SizesConfig = {
  //font sizes
  mini: 8,
  base: 10,
  small: 12,
  normal: 14,
  medium: 16,
  large: 18,
  xlarge: 20,
  xxlarge: 24,
  xxxlarge: 28,
};

export const FONTS: object = {
  mini: {fontSize: SIZES.mini, letterSpacing: 0},
  base: {fontSize: SIZES.base, letterSpacing: 0},
  small: {fontSize: SIZES.small, letterSpacing: 0},
  normal: {fontSize: SIZES.normal, letterSpacing: 0},
  medium: {fontSize: SIZES.medium, letterSpacing: 0},
  large: {fontSize: SIZES.large, letterSpacing: 0},
  xlarge: {fontSize: SIZES.xlarge, letterSpacing: 0},
  xxlarge: {fontSize: SIZES.xxlarge, letterSpacing: 0},
  xxxlarge: {fontSize: SIZES.xxxlarge, letterSpacing: 0},
};

const baseWidth: number = 375;
const baseHeight: number = 667;

const scaleWidth: number = width / baseWidth;
const scaleHeight: number = height / baseHeight;
const scale: number = Math.min(scaleWidth, scaleHeight);

const scaledSize = (size: number): number => Math.ceil(size * scale);

// guideline height for standard 5" device screen is 680
function RFValue(fontSize: number): number {
  const standardScreenHeight: number = 680;
  const {width, height}: {width: number; height: number} =
    Dimensions.get('window');
  const standardLength: number = width > height ? width : height;
  const offset: any =
    width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight; // iPhone X style SafeAreaView size in portrait

  const deviceHeight: number =
    Platform.OS === 'android' ? standardLength - offset : standardLength;

  const heightPercent: number =
    (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}

export const FONTSIZE: SizesConfig = {
  base: RFValue(SIZES.base),
  small: RFValue(SIZES.small),
  normal: RFValue(SIZES.normal),
  medium: RFValue(SIZES.medium),
  large: RFValue(SIZES.large),
  xlarge: RFValue(SIZES.xlarge),
  xxlarge: RFValue(SIZES.xxlarge),
  xxxlarge: RFValue(SIZES.xxxlarge),
};

export const SPACING: SizesConfig = {
  // small:20
  min: scaledSize(2),
  mini: scaledSize(4),
  xxxsmall: scaledSize(6),
  xxsmall: scaledSize(12),
  xsmall: scaledSize(24),
  small: scaledSize(32),
  medium: scaledSize(48),
  large: scaledSize(64),
  xlarge: scaledSize(96),
  xxlarge: scaledSize(128),
  xxxlarge: scaledSize(170),
};

export const BOXWITHSMALLSHADOW: object = {
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 1},
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 1,
};

export const BOXWITHSHADOW: object = {
  borderWidth: 0.3,
  borderStyle: 'solid',
  borderColor: '#fafafa',
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 1},
  shadowOpacity: 0.2,
  shadowRadius: 2,
  elevation: 1,
};

export const BOXWITHBIGSHADOW: object = {
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 5},
  shadowOpacity: 0.2,
  shadowRadius: 2,
  elevation: 5,
};

export const BORDERRADIUS: SizesConfig = {
  small: scaledSize(5),
  medium: scaledSize(10),
  large: scaledSize(15),
  xlarge: scaledSize(20),
  round: scaledSize(50),
};

export const CURRENCIES: CurrencyConfig = {
  naira: '₦',
};

export const IMAGES: ImagesConfig = {
  emptyImage: require('../../assets/images/empty-folder.png'),
};

export default {
  COLORS,
  SIZES,
  FONTS,
  SPACING,
  BOXWITHSMALLSHADOW,
  BOXWITHSHADOW,
  BOXWITHBIGSHADOW,
  IMAGES,
  BORDERRADIUS,
  FONTSIZE,
  HP,
  WP,
  CURRENCIES,
  SIZE,
};
