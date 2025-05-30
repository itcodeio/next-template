'use client';
import { FC, ReactNode, createContext, useContext } from 'react';
import RootStore from '../models/RootStore';

const RootStoreContext = createContext<RootStore | null>(null);

export const useStores = () => {
  const context = useContext(RootStoreContext);

  if (!context) {
    throw new Error('error');
  }

  return context;
};

const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <RootStoreContext.Provider value={new RootStore()}>
      {children}
    </RootStoreContext.Provider>
  );
};

export default StoreProvider;
