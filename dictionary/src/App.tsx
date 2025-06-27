import { useState, useMemo } from "react";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import theme from "./theme/theme";
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
    <Container maxWidth="lg">
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
    </Container>
  );
}
