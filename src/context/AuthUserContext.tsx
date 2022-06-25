import React, {createContext, useState, useMemo} from 'react';
import {usePersistState} from '../customHooks';

export type AuthUserContextStoreItem = {
  id?: string;
  email?: string;
  password?: string;
  isAuth?: boolean;
};

export interface AuthUserContextProps {
  authUserStore: AuthUserContextStoreItem;
  setAuthUserStore: Function;
}

export const AuthUserContext = createContext<AuthUserContextProps>({
  authUserStore: {},
  setAuthUserStore: () => null,
});

interface Props {
  children?: any;
}

export const AuthUserProvider: React.ComponentType<Props> = ({children}) => {
  const [authUserStore, setAuthUserStore] = usePersistState('authUserData', {});

  return (
    <AuthUserContext.Provider value={{authUserStore, setAuthUserStore}}>
      {children}
    </AuthUserContext.Provider>
  );
};
