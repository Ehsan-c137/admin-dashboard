import { useMode } from "./Theme";
import { colorModeContext } from "./context/Theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Topbar from "./scenes/global/Topbar";

function App() {
   const [theme, colorMode] = useMode();
   return (
      <colorModeContext.Provider value={colorMode}>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
               <main className="content">
                  <Topbar />
               </main>
            </div>
         </ThemeProvider>
      </colorModeContext.Provider>
   );
}

export default App;
