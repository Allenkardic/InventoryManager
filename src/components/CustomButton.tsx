import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TextStyle,
} from 'react-native';
//components
import CustomText from './CustomText';
import {BORDERRADIUS, COLORS, HP, BOXWITHSMALLSHADOW} from '../utils/themes';
import type {CustomButtonProps} from '../utils/types';

type Style = {
  container: TextStyle;
};

function CustomButton(props: CustomButtonProps) {
  const {
    btnBackgroundColor = COLORS.primary,
    btnColor = COLORS.secondary,
    onPress,
    title,
    disabled = false,
    testID,
  } = props;
  return (
    <TouchableOpacity
      testID={testID}
      onPress={disabled ? null : onPress}
      style={{
        ...styles.container,
        ...BOXWITHSMALLSHADOW,
        backgroundColor: disabled ? COLORS.midGrey : btnBackgroundColor,
      }}>
      <View>
        <CustomText normal style={{color: btnColor}} bold>
          {title}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create<Style>({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: Platform.OS === 'android' ? HP('6.5%') : HP('6%'),
    borderRadius: BORDERRADIUS.medium,
  },
});

export default React.memo(CustomButton);
