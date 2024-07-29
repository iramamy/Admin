import { ColorModeContext, UseMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import TopBar from "./scenes/global/TopBar";
import SideBar from "./scenes/global/SideBar";
import Dashbord from "./scenes/dashboard/index"

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
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
