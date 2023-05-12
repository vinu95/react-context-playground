import { useContext } from "react";
import { StoreContext } from "../Contexts/Store";

function useTheme() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  console.log("theme", context.state.themeContext)
  const theme = context.state.themeContext.theme;
  const toggleTheme = () => {
    const {
      state: {
        themeContext: {
          theme: { name: themeName },
        },
      },
      dispatch,
    } = context;
    if (themeName === "Light") {
      dispatch({
        type: "Dark",
      });
    } else {
      dispatch({
        type: "Light",
      });
    }
  };

  return {
    theme,
    toggleTheme,
  };
}

export { useTheme };
