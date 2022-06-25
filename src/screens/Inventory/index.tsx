import React, {RefObject} from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  ListRenderItemInfo,
  Image,
} from 'react-native';

import CustomText from '../../components/CustomText';
import CustomInput from '../../components/CustomInput';
import BottomSheet from '../../components/BottomSheet';
import InventoryCard from '../../components/InventoryCard';
import CustomButton from '../../components/CustomButton';
import PlusButton from '../../components/PlusButton';
import NavigationHeader from '../../components/NavigationHeader';
import EmptyList from '../../components/EmptyList';

import {useForm, Controller} from 'react-hook-form';
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
  // validation schema
  const schema = yup.object().shape({
    inventoryName: yup.string().required('Inventory name is required'),
    price: yup.string().required('Price name is required'),
    description: yup.string().required('Description of item is required'),
    stockCount: yup.string().required('Number of items remaining is required'),
  });

  // React Hook Form
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  const {authUserStore, setAuthUserStore} = React.useContext(AuthUserContext);
  const {inventoryStore, setInventoryStore} =
    React.useContext(InventoryListContext);

  // states
  // const [inventoryList, setInventoryList] = React.useState<InventoryCardProps[]>([]);
  const [inventoryList, setInventoryList] = React.useState<any>([]);

  const handleLogout = () => {
    setAuthUserStore({});
  };

  React.useEffect(() => {
    const inventoryByUser = inventoryStore.filter(
      item => item.userEmail === authUserStore.email,
    );

    setInventoryList(inventoryByUser);
  }, [inventoryStore]);

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
