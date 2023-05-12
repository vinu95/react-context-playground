import { RootAction, RootState } from "../Store";
import themeReducer, { ThemeAction } from "./themeReducer";

const rootReducer = (state: RootState, action: RootAction): RootState => ({
    themeContext: themeReducer(state.themeContext, action as ThemeAction),
});

export default rootReducer;