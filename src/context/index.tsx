import React, { ProviderProps, createContext } from 'react';
import AppStore from '~/store/AppStore';

const storeContext = createContext<typeof AppStore>(AppStore);

export const StoreProvider: React.FC<ProviderProps<typeof AppStore>> = ({ value, children }) => {
  return <storeContext.Provider value={value}>{children}</storeContext.Provider>;
};

export default storeContext;
