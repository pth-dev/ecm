import { ThemeMode } from "../types/config";

// Material-UI color imports
import type { PaletteOptions } from "@mui/material/styles";

// Project imports
import ThemeVars from "../assets/scss/_themes-vars.module.scss";

// Types
interface ExtendedPaletteOptions extends PaletteOptions {
  primary200?: string;
  primary800?: string;
  secondary200?: string;
  secondary800?: string;
  background?: {
    paper?: string;
    default?: string;
    light?: string;
    hover?: string;
  };
  borderLight?: string;
  borderMain?: string;
  borderDark?: string;
}

/**
 * Color palette
 */
const Palette = (mode: ThemeMode): ExtendedPaletteOptions => {
  const colors = {
    primary: {
      light: ThemeVars.primaryLight,
      main: ThemeVars.primaryMain,
      dark: ThemeVars.primaryDark,
    },
    secondary: {
      light: ThemeVars.secondaryLight,
      main: ThemeVars.secondaryMain,
      dark: ThemeVars.secondaryDark,
    },
    error: {
      light: ThemeVars.errorLight,
      main: ThemeVars.errorMain,
      dark: ThemeVars.errorDark,
    },
    warning: {
      light: ThemeVars.warningLight,
      main: ThemeVars.warningMain,
      dark: ThemeVars.warningDark,
    },
    success: {
      light: ThemeVars.successLight,
      main: ThemeVars.successMain,
      dark: ThemeVars.successDark,
    },
    grey: {
      50: ThemeVars.grey50,
      100: ThemeVars.grey100,
      200: ThemeVars.grey200,
      300: ThemeVars.grey300,
      500: ThemeVars.grey500,
      600: ThemeVars.grey600,
      700: ThemeVars.grey700,
      900: ThemeVars.grey900,
    },
    text: {
      primary: ThemeVars.textPrimary,
      secondary: ThemeVars.textSecondary,
      disabled: ThemeVars.textHint,
    },
    background: {
      paper: ThemeVars.paper,
      default: ThemeVars.background,
      light: ThemeVars.grey100,
      hover: ThemeVars.grey200,
    },
    primary200: ThemeVars.primary200,
    primary800: ThemeVars.primary800,
    secondary200: ThemeVars.secondary200,
    secondary800: ThemeVars.secondary800,
    borderLight: ThemeVars.borderLight,
    borderMain: ThemeVars.borderMain,
    borderDark: ThemeVars.borderDark,
  };

  return {
    mode,
    ...colors,
  };
};

export default Palette;
