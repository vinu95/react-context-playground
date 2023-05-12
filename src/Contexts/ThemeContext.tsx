import { createContext, useContext, useReducer } from "react";
import themes, { ThemeType } from "../Theme/Schema";

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
    theme: themes.dark,
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
  const { state, dispatch } = context;
  const { theme } = state;
  const toggleTheme = () => {
    if (theme.name === "Light") {
      dispatch({
        type: "Dark",
      });
    } else {
      dispatch({
        type: "Light",
      });
    }
  };
  return { context, toggleTheme, theme };
}

export { CustomThemeProvider, useTheme };
