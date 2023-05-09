import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Theme/GlobalStyles";
import Layout from "./Components/Layout";
import { useTheme } from "./Context/ThemeContext";

function App() {
  const { state } = useTheme();

  return (
    <ThemeProvider theme={state.theme}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
