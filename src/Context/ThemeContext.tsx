import { createContext, useContext, useReducer } from "react";
import themes from "../Theme/Schema";

type ThemeType = {
  id: string;
  name: string;
  colors: {
    primary_variant_1: string,
    primary_variant_2: string,
    primary_variant_3: string,
    primary_variant_4: string,
    body: string;
    text: string;
    button: {
      text: string;
      background: string;
    };
    link: {
      text: string;
      opacity: number;
    };
  };
};
type ThemeOptions = "Light" | "Dark";
type Action = { type: ThemeOptions };
type Dispatch = (action: Action) => void;
type State = { theme: ThemeType };
type ThemeProviderProps = { children: React.ReactNode };

const ThemeStateContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function themeReducer(state: State, action: Action) {
  switch (action.type) {
    case "Light": {
      return {
        ...state,
        theme: themes.light,
      };
    }
    case "Dark": {
      return {
        ...state,
        theme: themes.dark,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
}

function CustomThemeProvider({ children }: ThemeProviderProps) {
  const [state, dispatch] = useReducer(themeReducer, {
    theme: themes.light,
  });
  const value = { state, dispatch };
  return (
    <ThemeStateContext.Provider value={value}>
      {children}
    </ThemeStateContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeStateContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export { CustomThemeProvider, useTheme };
