import { ColorModeContext , useMode } from "./theme";
import { CssBaseline , ThemeProvider } from "@mui/material";

//css base line = this will reset the css default
function App() {

  const [theme , colorMode] = useMode();

  return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <div className="app">
            <main className="content">

            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
  );
}

export default App;
