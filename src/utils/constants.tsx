import React, {ComponentProps, FC, ReactNode} from 'react';
import {CURRENCIES} from './themes';

import {InventoryManagerContextInterface} from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function currencyFormat(num: number, nodp?: boolean) {
  return `${CURRENCIES?.naira}${num
    .toFixed(nodp ? 0 : 2)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
}

// export async function setItem(key: string, value: string) {
//   try {
//     return await AsyncStorage.setItem(key, JSON.stringify(value));
//   } catch (error) {
//     // console.error('AsyncStorage#setItem error: ' + error.message);
//   }
// }

// export async function getItem(
//   key: string,
// ): Promise<InventoryManagerContextInterface> {
//   return await AsyncStorage.getItem(key).then((result: any) => {
//     if (result) {
//       try {
//         result = JSON.parse(result) as InventoryManagerContextInterface;
//       } catch (e) {
//         // console.error('AsyncStorage#getItem error deserializing JSON for key: ' + key, e.message);
//       }
//     }
//     console.log(result, 'result');
//     return result;
//   });
// }

// export async function removeItem(key: string) {
//   return await AsyncStorage.removeItem(key);
// }
// combineComponents.tsx

// export const combinedProvider = (...components: FC<any>[]): FC => {
//   return components.reduce(
//     (AccumulatedComponents, CurrentComponent) => {
//       return ({children}: ComponentProps<FC>): JSX.Element => {
//         return (
//           <AccumulatedComponents>
//             <CurrentComponent>{children}</CurrentComponent>
//           </AccumulatedComponents>
//         );
//       };
//     },
//     ({children}) => <>{children}</>,
//   );
// };

export const combinedProvider = (...components: FC<any>[]): FC => {
  return components.reverse().reduce(
    (AccumulatedComponents, CurrentComponent) => {
      return ({children}: ComponentProps<FC>): JSX.Element => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({children}) => <>{children}</>,
  );
};

export const stampId = () => {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '');
};

export const checkWordsCount = (word: string) => {
  const tremWords = word.trim().split(' ');
  return tremWords.length;
};
