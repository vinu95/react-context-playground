import { Dispatch } from "react";
import themes, { ThemeType } from "../../Theme/Schema";

export type ThemeActions = "Light" | "Dark";

export interface ThemeState {
  theme: ThemeType;
}

export interface ThemeAction {
  type: ThemeActions;
  payload?: any;
}

export const initialThemeState: ThemeState = {
  theme: themes.light,
};

export type ThemeDispatch = Dispatch<ThemeAction>;

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
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
};

export default themeReducer;
