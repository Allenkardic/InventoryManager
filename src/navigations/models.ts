import type {InventoryCardProps} from '../utils/types';

export type StackModels = {
  Login: undefined;
  Inventory: undefined;
  AddInventory: undefined;
  EditInventory: undefined | {screenData: InventoryCardProps};
  InventoryDetails: undefined | {screenData?: object};
};
