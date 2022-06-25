import React from 'react';
import {StyleSheet, Text, View, ScrollView, TextStyle} from 'react-native';
// components
import CustomText from '../../components/CustomText';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackModels} from '../../navigations/models';
import {InventoryListContext} from '../../context/InventoryContext';
import {AuthUserContext} from '../../context/AuthUserContext';
import {stampId} from '../../utils/constants';
import {
  BORDERRADIUS,
  BOXWITHSHADOW,
  BOXWITHSMALLSHADOW,
  COLORS,
  SPACING,
} from '../../utils/themes';
// form
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

type Style = {
  container: TextStyle;
  inputContainer: TextStyle;
  headerText: TextStyle;
  btnContainer: TextStyle;
};
// navigation type
type Props = NativeStackScreenProps<StackModels, 'Login'>;

// form type
type FormValues = {
  email: string;
  password: string;
};

function Login(props: Props) {
  // validation schema
  const schema = yup.object().shape({
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  // React Hook Form
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const {inventoryStore, setInventoryStore} =
    React.useContext(InventoryListContext);

  const {setAuthUserStore} = React.useContext(AuthUserContext);

  interface User {
    firstname: string;
    age: number;
  }

  const onSubmit = (data: FormValues) => {
    const payload = {
      id: stampId(),
      email: data.email,
      password: data.password,
      isAuth: true,
    };
    // store the login user in store
    setAuthUserStore(payload);
  };
  return (
    <View style={{...styles.container}}>
      <View
        style={{
          ...styles.inputContainer,
        }}>
        <CustomText large center style={{...styles.headerText}}>
          SIGN IN
        </CustomText>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <CustomInput
              onChangeText={onChange}
              value={value}
              placeholder="ex: john@doe.co"
              label="Email"
              backgroundColor={COLORS.lightWhite}
              error={errors.email?.message}
              marginBottom={SPACING.small}
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <CustomInput
              onChangeText={onChange}
              value={value}
              placeholder="ex: p@ss"
              label="Password"
              backgroundColor={COLORS.lightWhite}
              error={errors.password?.message}
            />
          )}
          name="password"
        />
      </View>
      <View style={{...styles.btnContainer}}>
        <CustomButton title="Login" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create<Style>({
  container: {
    backgroundColor: COLORS.secondary,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: SPACING.xsmall,
  },
  inputContainer: {
    ...BOXWITHSMALLSHADOW,
    backgroundColor: COLORS.white,
    width: '100%',
    borderRadius: BORDERRADIUS.medium,
    paddingHorizontal: SPACING.xsmall,
    paddingVertical: SPACING.xsmall,
  },
  headerText: {
    color: COLORS.helperGray,
    marginBottom: SPACING.xsmall,
  },
  btnContainer: {
    marginTop: SPACING.xxxlarge,
  },
});
export default Login;
