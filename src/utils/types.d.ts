import {ReactNode, RefObject} from 'react';
import {TextProps, StyleProp, TextStyle} from 'react-native';
import {string} from 'yup';

export interface SizesConfig {
  min?: number | float;
  mini?: number | float;
  xxxsmall?: number | float;
  xxsmall?: number | float;
  xsmall?: number | float;
  base?: number | float;
  small?: number | float;
  normal?: number | float;
  medium?: number | float;
  large?: number | float;
  xlarge?: number | float;
  xxlarge?: number | float;
  xxxlarge?: number | float;
  round?: number | float;
  //dimensions
  screenWidth?: number | float;
  screenHeight?: number | float;
}

export interface ColorsConfig {
  //base color
  primary?: string;
  secondary?: string;
  tertiary?: string;
  success?: string;
  error?: string;
  yellow?: string;
  descText?: string;
  blue?: string;
  inputGrey?: string;
  placeholderGrey?: string;

  //neutral
  black?: string;
  white?: string;
  red?: string;

  //color variations
  darkGray?: string;
  midGrey?: string;
  lightGrey?: string;
  iconGrey?: string;
  smokeWhite?: string;
  lightWhite?: string;
  helperGray?: string;
}

type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

export interface TextProps {
  mini?: boolean;
  base?: boolean;
  small?: boolean;
  normal?: boolean;
  medium?: boolean;
  large?: boolean;
  xlarge?: boolean;
  xxlarge?: boolean;
  xxxlarge?: boolean;
  //
  regular?: boolean;
  bold?: boolean;
  regular?: boolean;
  semibold?: boolean;
  lightbold?: boolean;
  light200?: boolean;

  color?: string;
  left?: boolean;
  right?: boolean;
  center?: boolean;

  fontFamily?: string;
  children: ReactNode;
  style?: CustomTextStyleProp;
  onPress?: function;
}

export interface InputProps {
  iconName?: 'password';
  placeholder?: string;
  label?: string;
  value: string | number | float;
  onChangeText: function;
  backgroundColor?: string;
  onFocus?: function;
  style?: CustomTextStyleProp;
  secureTextEntry?: boolean;
  onPressIcon?: function;
  error?: string;
  onBlur?: boolean;
  autoCorrect?: boolean;
  selectTextOnFocus?: boolean;
  autoCapitalize?: 'characters' | 'words' | 'sentences' | 'none';
  keyboardType?:
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad'
    | 'url';
  onLabelInfoClick?: function;
  editable?: boolean;
  multiline?: boolean;
  style?: CustomTextStyleProp;
  marginBottom?: number | float;
  defaultValue?: string;
}

export interface BottomSheetProps {
  refRBSheet?: RefObject | null;
  title?: string;
  height?: number | float;
  closeButton?: function;
  closeOnPressMask?: boolean;
  closeOnDragDown?: boolean;
  header?: boolean;
  children?: ReactNode;
  open?: function | null;
}

export interface ScreenProps {
  onPress?: function;
  navigation?: object;
  params?: object;
  screenData?: object;
}

export interface InventoryCardProps {
  inventoryName: string;
  stockCount: number;
  price: number | float;
  description: string;
  id?: string;
  userEmail?: string;
  onPress?: function;
}

export interface CustomButtonProps {
  btnBackgroundColor?: string;
  btnColor?: string;
  disabled?: boolean;
  title: string;
  onPress: function;
}

export interface CustomHeaderProps {
  title?: string;
  onPressBackBtn?: function;
  onPressRightIcon?: function;
  rightIconName?: string;
  backgroundColor?: string;
}

export interface PlusButtonProps {
  onPress?: function;
}

export interface CurrencyConfig {
  naira?: string;
}

export interface ImagesConfig {
  emptyImage?: function;
}

export interface InventoryManagerContextInterface {
  inventoryStore?: object;
}

export type GlobalInventoryContent = {
  inventoryStore: inventoryStoreType[];
  //setInventoryStore: (iStoreFunction: inventoryStoreType) => void;
  setInventoryStore: (iStoreFunction: []) => void;
};
