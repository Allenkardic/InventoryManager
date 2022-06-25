// AppContextProvider
import React from 'react';

import {AuthUserProvider} from './AuthUserContext';
import {InventoryListProvider} from './InventoryContext';

import {combinedProvider} from '../utils/constants';

const providers = [AuthUserProvider as any, InventoryListProvider as any];

export const AppContextProvider = combinedProvider(...providers);
