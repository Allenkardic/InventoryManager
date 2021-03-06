import React from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  TextStyle,
  View,
  StatusBar,
} from 'react-native';
// components
import NavigationHeader from '../../components/NavigationHeader';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackModels} from '../../navigations/models';
import {checkWordsCount} from '../../utils/constants';
import {COLORS, SPACING} from '../../utils/themes';
// context
import {AuthUserContext} from '../../context/AuthUserContext';
import {InventoryListContext} from '../../context/InventoryContext';
// import
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
type Props = NativeStackScreenProps<StackModels, 'EditInventory'>;

// form type
type FormValues = {
  inventoryName: string;
  stockCount: number | string;
  description: string;
  price: number | string;
};

function EditInventory({navigation, route}: Props) {
  const screenData = route?.params?.screenData;

  // validation schema
  const schema = yup.object().shape({
    inventoryName: yup.string().required('Inventory name is required').trim(),
    stockCount: yup.number().required('Stock count left is required'),
    description: yup
      .string()
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

  const {authUserStore} = React.useContext(AuthUserContext);
  const {inventoryStore, setInventoryStore} =
    React.useContext(InventoryListContext);

  const onSubmit = (data: FormValues) => {
    // update the product to waiting edit
    const updatedInventory = [...inventoryStore].map((el: any) => {
      if (el.id === screenData?.id) {
        el.inventoryName = data.inventoryName;
        el.price = data.price;
        el.stockCount = data.stockCount;
        el.description = data.description;
      }
      return el;
    });

    setInventoryStore(updatedInventory);

    showMessage({
      type: 'success',
      message: 'Item updated successfuly',
    });
    navigation.navigate('Inventory');
  };

  const handleConfirmDelete = () => {
    const updatedInventory = inventoryStore.filter(
      el => el.id !== screenData?.id,
    );
    setInventoryStore(updatedInventory);
    showMessage({
      type: 'success',
      message: 'Item deleted successfuly',
    });
    navigation.navigate('Inventory');
  };

  const handleDeletePress = () => {
    Alert.alert(
      `Confirm deleting ${screenData?.inventoryName}`,
      `Are you sure you want to delete ${screenData?.inventoryName}`,
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {text: 'OK', onPress: handleConfirmDelete},
      ],
    );
  };

  return (
    <>
      <View>
        <StatusBar
          animated={true}
          backgroundColor={COLORS.smokeWhite}
          barStyle="dark-content"
        />
        <NavigationHeader
          onPressBackBtn={() => navigation.goBack()}
          title={'Edit Inventory'}
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
            defaultValue={screenData?.inventoryName}
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
            defaultValue={screenData?.price.toString()}
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
            defaultValue={screenData?.stockCount.toString()}
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
            defaultValue={screenData?.description}
          />
        </View>
      </ScrollView>
      <View
        style={{
          ...styles.btnContainer,
        }}>
        <View style={{width: '45%'}}>
          <CustomButton title="Update" onPress={handleSubmit(onSubmit)} />
        </View>
        <View style={{width: '45%'}}>
          <CustomButton
            btnBackgroundColor={COLORS.red}
            title="Delete"
            onPress={handleDeletePress}
            testID="delete-btn"
          />
        </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default EditInventory;
