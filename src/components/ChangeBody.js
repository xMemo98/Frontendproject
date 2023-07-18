import CssBaseline from "@mui/material/CssBaseline";
import darkScrollbar from "@mui/material/darkScrollbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "rgb(201 201 201)",
          }
        }
      }
    }
  }
);

export default function GlobalCssOverride() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  );
}
