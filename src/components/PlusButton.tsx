import React from 'react';
import {StyleSheet, TouchableOpacity, TextStyle} from 'react-native';
// components
import {COLORS, HP, WP, BOXWITHBIGSHADOW} from '../utils/themes';
import type {PlusButtonProps} from '../utils/types';
// @ts-ignore
import Icon from 'react-native-vector-icons/Feather';

type Style = {
  container: TextStyle;
};

function PlusButton({onPress}: PlusButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.container,
      }}>
      <Icon name={'plus'} size={HP('4%')} color={COLORS.white} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create<Style>({
  container: {
    ...BOXWITHBIGSHADOW,
    position: 'absolute',
    bottom: HP('6%'),
    right: WP('7%'),
    backgroundColor: COLORS.success,
    width: HP('7%'),
    height: HP('7%'),
    borderRadius: HP('7%') / 2,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
});

export default React.memo(PlusButton);
