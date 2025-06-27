// App.tsx
import { useState, useMemo } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme"; // Import your theme function here
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [fontChoice, setFontChoice] = useState<"sans" | "serif" | "mono">(
    "sans"
  );

  const muiTheme = useMemo(
    () => theme(darkMode, fontChoice),
    [darkMode, fontChoice]
  );

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        fontChoice={fontChoice}
        setFontChoice={setFontChoice}
      />
      <Hero />
    </ThemeProvider>
  );
}
