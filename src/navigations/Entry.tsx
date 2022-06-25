import React, {useContext} from 'react';

// import Onboarding from '../screens/Onboard';
// import Product from '../screens/Product';

import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import type {StackModels} from './models';

// auth context
import {AuthUserContext} from '../context/AuthUserContext';

// screens
import Login from '../screens/Login';
import Inventory from '../screens/Inventory';
import AddInventory from '../screens/Inventory/AddInventory';
import EditInventory from '../screens/Inventory/EditInventory';
import InventoryDetails from '../screens/Inventory/InventoryDetails';

const Stack = createNativeStackNavigator<StackModels>();

function Entry() {
  const {authUserStore} = React.useContext(AuthUserContext);
  const authState: boolean = authUserStore.hasOwnProperty('isAuth');
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Login'}>
        {!authState ? (
          <Stack.Group screenOptions={{}}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Group>
        ) : (
          <Stack.Group screenOptions={{}}>
            <Stack.Screen
              name="Inventory"
              component={Inventory}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="AddInventory"
              component={AddInventory}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="EditInventory"
              component={EditInventory}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="InventoryDetails"
              component={InventoryDetails}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Entry;
