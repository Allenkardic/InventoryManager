import React, {ReactNode} from 'react';
import {
  Text,
  StyleSheet,
  Platform,
  TextStyle,
  ViewStyle,
  View,
  ScrollView,
} from 'react-native';
import {HP, SPACING, COLORS} from '../utils/themes';
import type {BottomSheetProps} from '../utils/types';
import CustomText from './CustomText';
// @ts-ignore
import Icon from 'react-native-vector-icons/Feather';
import RBSheet from 'react-native-raw-bottom-sheet';
type Style = {
  container?: TextStyle;
  titleStyle?: TextStyle;
};

// function Bottomsheet(props: InputProps): JSX.Element {

function BottomSheet(props: BottomSheetProps): JSX.Element {
  const {
    refRBSheet,
    title,
    children,
    height = HP('40%'),
    closeButton,
    header = true,
    closeOnPressMask = true,
    closeOnDragDown = true,
  } = props;
  return (
    <View
      style={{
        ...styles.container,
      }}>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={closeOnDragDown}
        closeOnPressMask={closeOnPressMask}
        height={height}
        customStyles={{
          container: {
            opacity: 1,
            borderTopLeftRadius: HP('5%'),
            borderTopRightRadius: HP('5%'),
            backgroundColor: COLORS.white,
          },
          draggableIcon: {
            opacity: 1,
            width: '10%',
            backgroundColor: COLORS.midGrey,
            zIndex: 3,
          },
        }}
        dragFromTopOnly={true}>
        {/* <View style={{marginTop: !closeOnDragDown ? SPACING.small : 0}}> */}
        <View style={{marginTop: !closeOnDragDown ? 10 : 0}}>
          {closeButton && (
            <Icon
              onPress={() => refRBSheet.current.close()}
              name={'x'}
              color={COLORS.midGrey}
              size={HP('2.5%')}
              // style={{alignSelf: 'flex-start', marginLeft: SPACING.xsmall}}
              style={{alignSelf: 'flex-start', marginLeft: 20}}
            />
          )}
        </View>
        {header && (
          <View style={styles.titleStyle}>
            <CustomText normal center semibold style={{color: COLORS.midGrey}}>
              {title}
            </CustomText>
          </View>
        )}
        <ScrollView>{children}</ScrollView>
      </RBSheet>
    </View>
  );
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default React.memo(BottomSheet);
