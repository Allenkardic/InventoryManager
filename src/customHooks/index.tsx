import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const usePersistState = (storageKey: string, initialState: any) => {
  // Initiate the internal state.
  const [state, setInternalState] = useState(initialState);

  useEffect(() => {
    async function asyncEffect() {
      // Retrieve the data from the store.
      try {
        const currentStorageStateInApp = await AsyncStorage.getItem(storageKey);
        const storageInApp =
          currentStorageStateInApp != null
            ? JSON.parse(currentStorageStateInApp)
            : initialState;

        setInternalState(storageInApp);
      } catch (e) {
        // error reading value
      }
    }
    asyncEffect();
  }, []);

  // Create a replacement method that will set the state like normal, but that also saves the new state into the store.
  const setState = async (newState: any) => {
    try {
      const jsonValue = JSON.stringify(newState);
      await AsyncStorage.setItem(storageKey, jsonValue);
    } catch (e) {
      // saving error
    }
    setInternalState(newState);
  };

  return [state, setState];
};
