import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import {
  Switch,
  useTheme,
  Autocomplete,
  TextField,
  Divider,
} from "@mui/material";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  fontChoice: "sans" | "serif" | "mono";
  setFontChoice: (font: "sans" | "serif" | "mono") => void;
}

const fontOptions: { label: string; value: "sans" | "serif" | "mono" }[] = [
  { label: "Sans-serif", value: "sans" },
  { label: "Serif", value: "serif" },
  { label: "Monospace", value: "mono" },
];

export default function Navbar({
  darkMode,
  setDarkMode,
  fontChoice,
  setFontChoice,
}: NavbarProps) {
  const theme = useTheme();

  const currentFontOption =
    fontOptions.find((opt) => opt.value === fontChoice) ?? fontOptions[0];

  return (
    <Box
      sx={{
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.default,
        marginTop: "56px",
      }}
    >
      <AppBar
        position="static"
        //  "--Paper-shadow": "none", "--Paper-overlay": "transparent", default in MUI. elevation removes it
        elevation={0}
        sx={{
          backgroundColor: theme.palette.background.default,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "none",
          gap: 2,
          p: 1,
        }}
      >
        <LibraryBooksIcon
          fontSize="large"
          sx={{ color: theme.custom.moreGray.default }}
        />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Autocomplete
            options={fontOptions}
            value={currentFontOption}
            getOptionLabel={(option) => option.label}
            onChange={(_, newValue) => {
              if (newValue) setFontChoice(newValue.value);
            }}
            sx={{ width: 120 }}
            clearOnEscape={false}
            disableClearable
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                InputProps={{
                  ...params.InputProps,
                  disableUnderline: true,
                  style: {
                    boxShadow: "none",
                    cursor: "pointer",
                  },
                }}
              />
            )}
          />
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              height: "24px",
              borderWidth: "0,5px",
              borderColor: "gray",
              marginTop: "6px",
              marginX: "5px",
            }}
          />
          <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            sx={{
              "& .MuiSwitch-switchBase + .MuiSwitch-track": {
                backgroundColor: darkMode ? "#A445ED" : "#757575",
                opacity: 1,
              },
              "& .MuiSwitch-thumb": {
                boxShadow: "1px",
                color: "#fff",
                border: "0.1px solid black",
              },
            }}
          />

          <BedtimeIcon sx={{ color: theme.palette.action.active }} />
        </Box>
      </AppBar>
    </Box>
  );
}
