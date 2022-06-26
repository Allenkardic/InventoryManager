import React from 'react';
import {ScrollView, StyleSheet, TextStyle, View} from 'react-native';
// components
import NavigationHeader from '../../components/NavigationHeader';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackModels} from '../../navigations/models';
// context
import {AuthUserContext} from '../../context/AuthUserContext';
import {InventoryListContext} from '../../context/InventoryContext';

import {
  stampId,
  checkIfItemNameExist,
  checkWordsCount,
} from '../../utils/constants';
import {COLORS, SPACING} from '../../utils/themes';

import {showMessage} from 'react-native-flash-message';
// form
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

type Style = {
  formContainer: TextStyle;
  btnContainer: TextStyle;
};
// navigation type
type Props = NativeStackScreenProps<StackModels, 'AddInventory'>;

// form type
type FormValues = {
  inventoryName: string;
  stockCount: number;
  description: string;
  price: number;
};

function AddInventory({navigation}: Props) {
  const {authUserStore} = React.useContext(AuthUserContext);
  const {inventoryStore, setInventoryStore} =
    React.useContext(InventoryListContext);

  // filter inventory base on the user that created it
  const inventoryByUser = inventoryStore.filter(
    item => item.userEmail === authUserStore.email,
  );

  // validation schema
  const schema = yup.object().shape({
    inventoryName: yup
      .string()
      .required('Inventory name is required')
      .test(
        'inventoryName',
        'Inventory name already exists',
        (value: any) => checkIfItemNameExist(value, inventoryByUser) === false,
      ),
    stockCount: yup.number().required('Stock count left is required'),
    description: yup
      .string()
      .required('Brief descripting is required')
      .test(
        'description',
        'Description must not be less than 3 words',
        (value: any) => checkWordsCount(value) >= 3,
      ),
    price: yup.number().required('Price is required'),
  });

  // React Hook Form
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    const payload = {
      id: stampId(),
      userEmail: authUserStore.email,
      inventoryName: data.inventoryName,
      stockCount: data.stockCount,
      description: data.description,
      price: data.price,
    };

    const addNewPayload = [...inventoryStore, payload];
    // add data to inventory list
    setInventoryStore(addNewPayload);
    showMessage({
      type: 'success',
      message: 'Item added successfuly',
    });
    navigation.navigate('Inventory');
  };

  // console.log(checkIfItemNameExist('allen', inventoryStore), 'storesss');
  return (
    <>
      <View>
        <NavigationHeader
          onPressBackBtn={() => navigation.goBack()}
          title={'Add Inventory'}
          backgroundColor={COLORS.smokeWhite}
        />
      </View>
      <ScrollView>
        <View
          style={{
            ...styles.formContainer,
          }}>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <CustomInput
                onChangeText={onChange}
                value={value}
                placeholder="ex: book"
                label="Item name"
                backgroundColor={COLORS.lightWhite}
                error={errors.inventoryName?.message}
                marginBottom={SPACING.xsmall}
              />
            )}
            name="inventoryName"
          />
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <CustomInput
                onChangeText={onChange}
                value={value}
                placeholder="ex: 200"
                label="Price"
                backgroundColor={COLORS.lightWhite}
                error={errors.price?.message}
                marginBottom={SPACING.xsmall}
                keyboardType={'number-pad'}
              />
            )}
            name="price"
          />

          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <CustomInput
                onChangeText={onChange}
                value={value}
                placeholder="ex: 10"
                label="Count"
                backgroundColor={COLORS.lightWhite}
                error={errors.stockCount?.message}
                marginBottom={SPACING.xsmall}
                keyboardType={'number-pad'}
              />
            )}
            name="stockCount"
          />

          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <CustomInput
                onChangeText={onChange}
                value={value}
                placeholder="A brief description"
                label="Description"
                multiline={true}
                backgroundColor={COLORS.lightWhite}
                error={errors.description?.message}
              />
            )}
            name="description"
          />
        </View>
      </ScrollView>
      <View
        style={{
          ...styles.btnContainer,
        }}>
        <CustomButton title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </>
  );
}

const styles = StyleSheet.create<Style>({
  formContainer: {
    paddingTop: SPACING.small,
    paddingHorizontal: SPACING.xsmall,
  },
  btnContainer: {
    paddingBottom: SPACING.xsmall,
    paddingHorizontal: SPACING.xsmall,
  },
});

export default AddInventory;
