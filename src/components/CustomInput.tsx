import React, {ReactNode} from 'react';
import {
  Text,
  StyleSheet,
  Platform,
  TextStyle,
  ViewStyle,
  View,
  TextInput,
} from 'react-native';
import {HP, WP, COLORS, SPACING, BORDERRADIUS} from '../utils/themes';
import type {InputProps} from '../utils/types';
import CustomText from './CustomText';
// @ts-ignore
import Icon from 'react-native-vector-icons/Feather';

type Style = {
  container?: TextStyle;
  inputContainer?: TextStyle;
};

function CustomInput(props: InputProps): JSX.Element {
  const {
    iconName,
    placeholder,
    label,
    value,
    onChangeText,
    backgroundColor,
    onFocus,
    style,
    secureTextEntry,
    error,
    onBlur,
    keyboardType,
    onLabelInfoClick,
    multiline = false,
    editable,
    onPressIcon,
    marginBottom,
    defaultValue,
  } = props;
  return (
    <View style={{marginBottom: marginBottom ? marginBottom : SPACING.xxsmall}}>
      <CustomText
        base
        style={{
          color: COLORS.placeholderGrey,
          marginBottom: SPACING.min,
          paddingLeft: SPACING.xxxsmall,
        }}>
        {label}
      </CustomText>
      <View
        style={{
          ...styles.container,
          borderColor:
            error && error.length > 1 ? COLORS.error : COLORS.inputGrey,
          backgroundColor: backgroundColor,
        }}>
        <TextInput
          keyboardType={keyboardType}
          placeholderTextColor={COLORS.placeholderGrey}
          style={[
            {
              ...styles.inputContainer,

              height: multiline ? HP('10%') : HP('5%'),
              width: iconName == 'password' ? '90%' : '100%',
            },
          ]}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          value={value}
          autoCorrect={false}
          selectTextOnFocus={true}
          autoCapitalize="none"
          multiline={multiline}
          numberOfLines={4}
          underlineColorAndroid="transparent"
          onFocus={onFocus}
          editable={editable}
          defaultValue={defaultValue}
        />
        {iconName === 'password' && (
          <View
            style={{
              width: '10%',
            }}>
            {secureTextEntry ? (
              <Icon
                onPress={onPressIcon}
                name={'eye-off'}
                size={Platform.OS == 'android' ? HP('3.5%') : HP('3%')}
                color={COLORS.lightGrey}
              />
            ) : (
              <Icon
                onPress={onPressIcon}
                name={'eye'}
                size={Platform.OS == 'android' ? HP('3.5%') : HP('3%')}
                color={COLORS.lightGrey}
              />
            )}
          </View>
        )}
      </View>

      {error && error.length > 1 && (
        <CustomText
          small
          style={{color: COLORS.error, paddingLeft: SPACING.xxxsmall}}>
          {error}
        </CustomText>
      )}
    </View>
  );
}

const styles = StyleSheet.create<Style>({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: BORDERRADIUS.small,
  },

  inputContainer: {
    lineHeight: Platform.OS == 'android' ? 20 : 0,
    height: '100%',
    paddingLeft: SPACING.xxsmall,
  },
});

export default React.memo(CustomInput);
