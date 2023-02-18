import React, { createContext } from 'react';

import TodoModel from './TodoModel';

type Store = {
  todoModel: TodoModel;
};

const store = {
  todoModel: TodoModel.createInstance(),
};

export const StoreContext = createContext<Store>(store);

type Props = {
  children: React.ReactNode;
};

const StoreProvider = ({ children }: Props) => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export default StoreProvider;
