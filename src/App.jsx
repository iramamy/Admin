import { ColorModeContext, UseMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import TopBar from "./scenes/global/TopBar";
import SideBar from "./scenes/global/SideBar";
import Dashbord from "./scenes/dashboard"
import Team from "./scenes/team";
import Contact from "./scenes/contacts"
import Invoice from "./scenes/invoices";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";

function App() {
    const [theme, colorMode] = UseMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <SideBar />
                    <main className="content">
                        <TopBar />
                        <Routes>
                            <Route path="/" element={<Dashbord />} />
                            <Route path="/team" element={<Team />} />
                            <Route path="/contacts" element={<Contact />} />
                            <Route path="/invoices" element={<Invoice />} />
                            <Route path="/profile" element={<Form />} />
                            <Route path="/calendar" element={<Calendar />} />
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
