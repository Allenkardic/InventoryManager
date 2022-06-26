import React, {ComponentProps, FC, ReactNode} from 'react';
import {CURRENCIES} from './themes';
import {InventoryStoreItem} from '../context/InventoryContext';

export function currencyFormat(num: number, nodp?: boolean) {
  return `${CURRENCIES?.naira}${num
    .toFixed(nodp ? 0 : 2)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
}

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

export const checkWordsCount = (word: string) => {
  if (word === undefined) {
    // this is a checker for YUP incase the user does not enter any words.
    return 1;
  } else {
    const tremWords = word.trim().split(' ');
    return tremWords.length;
  }
};

export const checkIfItemNameExist = (
  name: string,
  data: InventoryStoreItem[],
) => {
  let result = data.some((el: any) => el['inventoryName'] === name);
  return result;
};
