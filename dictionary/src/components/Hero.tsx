import { Box, Typography, useTheme } from "@mui/material";

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        fontFamily: theme.custom.activeFont,
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.default,
        p: 4,
        borderRadius: 2,
      }}
    >
      <Typography variant="h2" gutterBottom>
        This is the Hero section
      </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, atque!
        Voluptatem, reprehenderit nihil! Minima fugiat, quaerat nostrum placeat,
        quae facilis fugit illo unde ex earum laudantium dolore officiis eos
        dignissimos fuga nisi natus culpa expedita optio vero voluptates rem
        omnis. Accusamus nihil, neque officia soluta vel aperiam voluptates nam
        libero.
      </Typography>
    </Box>
  );
};

export default Hero;
