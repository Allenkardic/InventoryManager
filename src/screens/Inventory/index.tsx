import React, {RefObject} from 'react';
import {FlatList, View, ListRenderItemInfo, StatusBar} from 'react-native';
// components
import InventoryCard from '../../components/InventoryCard';
import PlusButton from '../../components/PlusButton';
import NavigationHeader from '../../components/NavigationHeader';
import EmptyList from '../../components/EmptyList';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {StackModels} from '../../navigations/models';
import type {InventoryCardProps} from '../../utils/types';
import {COLORS, HP, WP, SPACING, IMAGES} from '../../utils/themes';

// context
import {InventoryListContext} from '../../context/InventoryContext';
import {AuthUserContext} from '../../context/AuthUserContext';

// @ts-ignore
import Icon from 'react-native-vector-icons/Feather';
type Props = NativeStackScreenProps<StackModels, 'Inventory'>;

function Inventory({navigation}: Props) {
  // states
  const [inventoryList, setInventoryList] = React.useState<any>([]);
  // context
  const {authUserStore, setAuthUserStore} = React.useContext(AuthUserContext);
  const {inventoryStore} = React.useContext(InventoryListContext);

  React.useEffect(() => {
    // this checks and returns inventory list based on the sign in users email
    const inventoryByUser = inventoryStore.filter(
      item => item.userEmail === authUserStore.email,
    );
    setInventoryList(inventoryByUser);
  }, [inventoryStore]);

  const handleLogout = () => {
    setAuthUserStore({});
  };

  const handleOnPresscard = (item: InventoryCardProps) => {
    const screenData: InventoryCardProps = item;
    navigation.navigate('EditInventory', {screenData});
  };

  const renderItem = ({item}: ListRenderItemInfo<InventoryCardProps>) => {
    const {description, stockCount, price, inventoryName} = item;
    return (
      <View style={{marginHorizontal: SPACING.xxsmall}}>
        <InventoryCard
          onPress={() => handleOnPresscard(item)}
          inventoryName={inventoryName}
          stockCount={stockCount}
          price={price}
          description={description}
        />
      </View>
    );
  };

  return (
    <View style={{backgroundColor: COLORS.smokeWhite, flex: 1}}>
      <StatusBar
        animated={true}
        backgroundColor={COLORS.smokeWhite}
        barStyle="dark-content"
      />
      <NavigationHeader
        onPressRightIcon={handleLogout}
        rightIconName={'log-out'}
        title={'Inventory'}
        backgroundColor={COLORS.smokeWhite}
      />
      <View style={{marginTop: SPACING.xsmall}} />
      <FlatList
        data={inventoryList}
        renderItem={renderItem}
        keyExtractor={item => item.id?.toString() ?? ''}
        ListEmptyComponent={<EmptyList />}
      />

      <PlusButton onPress={() => navigation.navigate('AddInventory')} />
    </View>
  );
}

export default Inventory;
