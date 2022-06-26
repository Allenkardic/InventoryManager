import React from 'react';
import {Image, StyleSheet, TextStyle, View} from 'react-native';
import {HP, WP, SPACING, IMAGES} from '../utils/themes';

import CustomText from './CustomText';

type Style = {
  container: TextStyle;
  imgContainer: TextStyle;
};

function EmptyList(): JSX.Element {
  return (
    <View
      style={{
        ...styles.container,
      }}>
      <View style={{...styles.imgContainer}}>
        <Image
          source={IMAGES.emptyImage}
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <CustomText center base style={{marginTop: SPACING.xxsmall}}>
        click the add icon to enter inventry
      </CustomText>
    </View>
  );
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    marginTop: SPACING.xxxlarge,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    height: HP('10%'),
    width: WP('25%'),
  },
});
export default React.memo(EmptyList);
