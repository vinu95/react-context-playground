import React, { createContext, useReducer, useContext, memo } from "react";
import {
  ThemeState,
  ThemeDispatch,
  initialThemeState,
} from "./Reducers/themeReducer";
import rootReducer from "./Reducers/rootReducer";

export interface RootState {
  themeContext: ThemeState;
}

export interface RootAction {
  type: string;
  payload?: any;
}

export type RootDispatch = ThemeDispatch;

export type ContextType = {
  state: RootState;
  dispatch: RootDispatch;
};

type RootProviderProps = { children: React.ReactNode };

export const StoreContext = createContext<
  { state: RootState; dispatch: RootDispatch } | undefined
>(undefined);

function StoreProvider({ children }: RootProviderProps) {
  const [state, dispatch] = useReducer(rootReducer, {
    themeContext: initialThemeState,
  });
  const value = { state, dispatch };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}

function useStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}

export default memo(StoreProvider);
export { useStore };
