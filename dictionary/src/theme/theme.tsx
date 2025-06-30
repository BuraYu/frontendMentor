import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      warning: { default: string };
      highlight: { default: string };
      lightGray: { default: string };
      grayer: { default: string };
      moreGray: { default: string };
      grayest: { default: string };
      grayBlack: { default: string };
      grayerBlack: { default: string };
      fonts: {
        sans: string;
        serif: string;
        mono: string;
      };
      activeFont: string;
    };
  }
  interface ThemeOptions {
    custom?: {
      warning?: { default: string };
      highlight?: { default: string };
      lightGray?: { default: string };
      grayer?: { default: string };
      moreGray?: { default: string };
      grayest?: { default: string };
      grayBlack?: { default: string };
      grayerBlack?: { default: string };
      fonts?: {
        sans?: string;
        serif?: string;
        mono?: string;
      };
      activeFont?: string;
    };
  }
}

const theme = (darkMode: boolean, fontChoice: "sans" | "serif" | "mono") =>
  createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#000000" : "#FFFFFF",
      },
      text: {
        primary: darkMode ? "#FFFFFF" : "#000000",
      },
      action: {
        active: darkMode ? "#A445ED" : "#757575",
      },
    },
    typography: {
      fontFamily:
        fontChoice === "sans"
          ? `"Helvetica Neue", Arial, sans-serif`
          : fontChoice === "serif"
          ? `"Times New Roman", serif`
          : `"Courier New", monospace`,
    },
    custom: {
      warning: { default: "#FF5252" },
      highlight: { default: "#A445ED" },
      lightGray: { default: "#F4F4F4" },
      grayer: { default: "#E9E9E9" },
      moreGray: { default: "#757575" },
      grayest: { default: "#3A3A3A" },
      grayBlack: { default: "#2D2D2D" },
      grayerBlack: { default: "#1F1F1F" },
      fonts: {
        sans: `"Helvetica Neue", Arial, sans-serif`,
        serif: `"Times New Roman", serif`,
        mono: `"Courier New", monospace`,
      },
    },
  });

export default theme;
