import { useState, useMemo, useEffect } from 'react';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import theme from './theme/theme';
import Navbar from './components/Navbar';
import SearchInput from './components/SearchInput';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [fontChoice, setFontChoice] = useState<'sans' | 'serif' | 'mono'>(
    'sans'
  );
  const [data, setData] = useState();

  useEffect(() => {
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/keyboard')
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error('Error fetching', error));
  }, []);

  console.log(data);
  const muiTheme = useMemo(
    () => theme(darkMode, fontChoice),
    [darkMode, fontChoice]
  );

  return (
    <Container maxWidth='lg'>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          fontChoice={fontChoice}
          setFontChoice={setFontChoice}
        />
        <SearchInput darkMode={darkMode} />
      </ThemeProvider>
    </Container>
  );
}
