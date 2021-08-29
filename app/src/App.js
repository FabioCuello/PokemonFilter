import { createTheme, ThemeProvider } from "@material-ui/core";

// TODO: add our own styles
const theme = createTheme({});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>Pokemon</ThemeProvider>
    </div>
  );
}

export default App;
