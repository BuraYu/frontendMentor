import { AppBar, Toolbar, Switch, Button } from "@mui/material";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  fontChoice: "sans" | "serif" | "mono";
  setFontChoice: (font: "sans" | "serif" | "mono") => void;
}

export default function Navbar({
  darkMode,
  setDarkMode,
  fontChoice,
  setFontChoice,
}: NavbarProps) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        <Button
          onClick={() => setFontChoice("sans")}
          color={fontChoice === "sans" ? "secondary" : "inherit"}
        >
          Sans
        </Button>
        <Button
          onClick={() => setFontChoice("serif")}
          color={fontChoice === "serif" ? "secondary" : "inherit"}
        >
          Serif
        </Button>
        <Button
          onClick={() => setFontChoice("mono")}
          color={fontChoice === "mono" ? "secondary" : "inherit"}
        >
          Mono
        </Button>
      </Toolbar>
    </AppBar>
  );
}
