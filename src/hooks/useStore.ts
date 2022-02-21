import React, { useContext } from 'react';

export type Selector<ContextData, Selection> = (store: ContextData) => Selection;

const useStore = <ContextData>(context: React.Context<ContextData>): ContextData => {
  const store = useContext(context);
  return store;
};

export default useStore;
