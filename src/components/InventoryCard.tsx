import React, {ReactNode} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';

import {
  BORDERRADIUS,
  BOXWITHSHADOW,
  COLORS,
  FONTSIZE,
  SPACING,
} from '../utils/themes';
import type {InventoryCardProps} from '../utils/types';
import CustomText from './CustomText';
import {currencyFormat} from '../utils/constants';

type Style = {
  container: TextStyle;
  contentContainer: TextStyle;
};

function InventoryCard(props: InventoryCardProps): JSX.Element {
  const {inventoryName, stockCount, price, description, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress} style={{...styles.container}}>
      <View style={{...styles.contentContainer}}>
        <View style={{width: '70%'}}>
          <CustomText
            medium
            semibold
            style={{color: COLORS.black, marginBottom: SPACING.xxxsmall}}>
            {inventoryName}
          </CustomText>
          <CustomText
            base
            style={{color: COLORS.descText, marginBottom: SPACING.mini}}>
            {description}
          </CustomText>
          <CustomText
            base
            style={{
              color: COLORS.placeholderGrey,
            }}>{`${stockCount} left`}</CustomText>
        </View>
        <View style={{width: '30%'}}>
          <CustomText bold normal right>
            {currencyFormat(price, true)}
          </CustomText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create<Style>({
  container: {
    ...BOXWITHSHADOW,
    backgroundColor: COLORS.white,
    borderRadius: BORDERRADIUS.small,
    paddingHorizontal: SPACING.xxsmall,
    paddingVertical: SPACING.xxxsmall,
    marginBottom: SPACING.xxsmall,
  },

  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default React.memo(InventoryCard);
