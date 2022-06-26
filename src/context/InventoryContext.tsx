import React, {createContext, useState, useMemo} from 'react';
import {usePersistState} from '../customHooks';

export type InventoryStoreItem = {
  id?: string;
  userEmail?: string;
  inventoryName?: string;
  stockCount?: number;
  description?: string;
  price?: number;
};

export interface InventoryContextProps {
  inventoryStore: InventoryStoreItem[];
  setInventoryStore: Function;
}

export const InventoryListContext = createContext<InventoryContextProps>({
  inventoryStore: [],
  setInventoryStore: () => null,
});

interface Props {
  children?: any;
}

// provider for the Inventory data
export const InventoryListProvider: React.ComponentType<Props> = ({
  children,
}) => {
  // usePersisState takes two params (key and value) then stores this data in asyncstorage
  const [inventoryStore, setInventoryStore] = usePersistState(
    'inventoryData',
    [],
  );
  return (
    <InventoryListContext.Provider value={{inventoryStore, setInventoryStore}}>
      {children}
    </InventoryListContext.Provider>
  );
};
