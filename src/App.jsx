import { ProSidebarProvider } from "react-pro-sidebar";
import { useMode } from "./Theme";
import { Routes, Route } from "react-router-dom";
import { colorModeContext } from "./context/Theme";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard/index";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts/index";
import Invoices from "./scenes/Invoices/index";
import Form from "./scenes/form/index";
import Calendar from "./scenes/calendar/index";
import FAQ from "./scenes/faq/index";
import Bar from "./scenes/Bar/index";
import Pie from "./scenes/Pie/index";
import Line from "./scenes/line";
import Geography from "./scenes/geography";

// TODO craete 404 page
function App() {
   const [theme, colorMode] = useMode();

   return (
      <colorModeContext.Provider value={colorMode}>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            <ProSidebarProvider>
               <Box className="app">
                  <Box position="sticky" height="100vh">
                     <Sidebar />
                  </Box>
                  <main className="content">
                     <Topbar />
                     <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/team" element={<Team />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/invoices" element={<Invoices />} />
                        <Route path="/form" element={<Form />} />
                        <Route path="/calendar" element={<Calendar />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/bar" element={<Bar />} />
                        <Route path="/pie" element={<Pie />} />
                        <Route path="/line" element={<Line />} />
                        <Route path="/geography" element={<Geography />} />
                     </Routes>
                  </main>
               </Box>
            </ProSidebarProvider>
         </ThemeProvider>
      </colorModeContext.Provider>
   );
}

export default App;
