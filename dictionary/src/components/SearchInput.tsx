import { Box, InputAdornment, TextField, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

interface SearchbarProps {
  darkMode: boolean;
}

const SearchInput = ({ darkMode }: SearchbarProps) => {
  const [emptySearch, setEmptySearch] = useState<boolean>(false);
  // remove this
  console.log(setEmptySearch);

  const theme = useTheme();
  return (
    <Box
      sx={{
        fontFamily: theme.custom.activeFont,
        backgroundColor: theme.palette.background.default,
        maxWidth: "100%",
        marginTop: "54px",
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search..."
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{
          maxWidth: "100%",
          backgroundColor: darkMode ? "#CDCDCD" : "#F4F4F4",
          "& .MuiInputBase-input": {
            color: darkMode ? "#000000" : "#333333",
          },
          borderRadius: "16px",
          "& .MuiOutlinedInput-root": {
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: emptySearch
                ? theme.custom.warning.default
                : theme.custom.highlight.default,
              borderWidth: "2px",
              borderStyle: "solid",
              borderRadius: "16px",
            },
          },
        }}
      />
      {emptySearch && (
        <span
          style={{
            color: theme.custom.warning.default,
            fontSize: "12px",
            marginLeft: "2px",
          }}
        >
          Whoops, can’t be empty…
        </span>
      )}
    </Box>
  );
};

export default SearchInput;
