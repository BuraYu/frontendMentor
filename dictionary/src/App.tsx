import { Box, Typography } from "@mui/material";
import type React from "react";

const App: React.FC<{}> = () => {
  return (
    <Box sx={{ backgroundColor: "pink" }}>
      <Typography sx={{ color: "green" }}>Hello World</Typography>
    </Box>
  );
};

export default App;
