import React from 'react';
import {View, StyleSheet, TextStyle, Platform} from 'react-native';

import {HP, FONTSIZE, COLORS, SIZES, SPACING} from '../utils/themes';

import type {CustomHeaderProps} from '../utils/types';
import CustomText from './CustomText';
// @ts-ignore
import Icon from 'react-native-vector-icons/Feather';

type Style = {
  container: TextStyle;
  leftContent: TextStyle;
  centerContent: TextStyle;
  rightContent: TextStyle;
};

function NavigationHeader(props: CustomHeaderProps) {
  const {
    title,
    onPressRightIcon,
    rightIconName,
    backgroundColor = COLORS.white,
    onPressBackBtn,
  } = props;

  return (
    <View style={{...styles.container, backgroundColor: backgroundColor}}>
      <View style={{...styles.leftContent}}>
        {onPressBackBtn && (
          <Icon
            name={'arrow-left'}
            color={COLORS.descText}
            size={HP('3%')}
            onPress={onPressBackBtn}
          />
        )}
      </View>
      <View style={{...styles.centerContent}}>
        <CustomText center semibold medium>
          {title}
        </CustomText>
      </View>
      <View style={{...styles.rightContent}}>
        {onPressRightIcon && (
          <Icon
            name={rightIconName}
            color={COLORS.descText}
            size={HP('3%')}
            onPress={onPressRightIcon}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create<Style>({
  container: {
    paddingTop: Platform.OS === 'ios' ? SPACING.medium : SPACING.xxsmall,
    paddingHorizontal: SPACING.xxxsmall,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContent: {
    width: '10%',
    alignSelf: 'flex-start',
  },
  centerContent: {
    width: '80%',
  },
  rightContent: {
    width: '10%',
  },
});

export default React.memo(NavigationHeader);
