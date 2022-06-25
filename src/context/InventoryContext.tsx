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

export const InventoryListProvider: React.ComponentType<Props> = ({
  children,
}) => {
  // this is the old code to store states
  //   const [inventoryStore, setInventoryStore] = useState<InventoryStoreItem[]>(
  //     [],
  //   );
  const [inventoryStore, setInventoryStore] = usePersistState(
    'inventoryData',
    [],
  );

  //   to improve performance by updating app store when inventorestore changes
  //   const providerInventoryStore = useMemo(
  //     () => ({inventoryStore, setInventoryStore}),
  //     [],
  //   );
  return (
    <InventoryListContext.Provider value={{inventoryStore, setInventoryStore}}>
      {/* <InventoryListContext.Provider value={providerInventoryStore}> */}
      {children}
    </InventoryListContext.Provider>
  );
};
