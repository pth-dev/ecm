import { useTheme as useMuiTheme } from "@mui/material/styles";
import { useConfig } from "../contexts/ConfigContext";
import type { ThemeMode } from "../types/config";

const useTheme = () => {
  const theme = useMuiTheme();
  const { state, onChangeThemeMode } = useConfig();
  const { navType } = state.themeConfig;

  const toggleTheme = () => {
    onChangeThemeMode(navType === "light" ? "dark" : "light");
  };

  return {
    theme,
    themeMode: navType as ThemeMode,
    toggleTheme,
  };
};

export default useTheme;
