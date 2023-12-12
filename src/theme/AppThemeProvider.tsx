import { FunctionComponent, useMemo, PropsWithChildren } from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import DARK_THEME from './dark';
import LIGHT_THEME from './light';

function getThemeByDarkMode(darkMode: boolean) {
  return darkMode ? createTheme(DARK_THEME) : createTheme(LIGHT_THEME);
}

interface Props extends PropsWithChildren {

}

const AppThemeProvider: FunctionComponent<Props> = ({ children }) => {
  const darkMode = true;

  const theme = useMemo(
    () => getThemeByDarkMode(darkMode),
    [darkMode] // Observe AppStore and re-create the theme when .darkMode changes
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
