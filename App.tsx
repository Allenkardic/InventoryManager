/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import Entry from './src/navigations/Entry';
import FlashMessage from 'react-native-flash-message';
import {AppContextProvider} from './src/context';

// @ts-ignore
// import Icon from 'react-native-vector-icons/Feather';

const App = () => {
  return (
    <AppContextProvider>
      <Entry />
      <FlashMessage floating={true} position={'top'} hideOnPress={true} />
    </AppContextProvider>
  );
};

export default App;
