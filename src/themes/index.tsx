import React from "react";
import type { ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

// Project imports
import Palette from "./palette";
import Typography from "./typography";
import CustomShadows from "./shadows";
import componentStyleOverrides from "./compStyleOverride";
import { useConfig } from "../contexts/ConfigContext";
import type { ThemeMode } from "../types/config";

// Import theme variables
import ThemeVars from "../assets/scss/_themes-vars.module.scss";

// Import types
import type {
  CustomShadowProps,
  CustomTypography,
} from "../types/default-theme";

export const ThemeConfig = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  borderRadius: 8,
  navType: "light", // light, dark
  presetColor: "default", // default, theme1, theme2
  locale: "en", // en, fr, etc.
};

// Custom Shadow generator
const CustomShadows = (): CustomShadowProps => {
  return {
    button: "0 2px 0 rgba(0, 0, 0, 0.045)",
    text: "0 -1px 0 rgba(0, 0, 0, 0.12)",
    z1: "0px 2px 8px rgba(0, 0, 0, 0.15)",
    z8: "0px 8px 16px rgba(0, 0, 0, 0.15)",
    z12: "0px 12px 24px -4px rgba(0, 0, 0, 0.15)",
    z16: "0px 16px 32px -4px rgba(0, 0, 0, 0.15)",
    z20: "0px 20px 40px -4px rgba(0, 0, 0, 0.15)",
    z24: "0px 24px 48px rgba(0, 0, 0, 0.15)",
    primary: `0 4px 14px 0 ${ThemeVars.primaryMain}`,
    secondary: `0 4px 14px 0 ${ThemeVars.secondaryMain}`,
    success: `0 4px 14px 0 ${ThemeVars.successMain}`,
    warning: `0 4px 14px 0 ${ThemeVars.warningMain}`,
    error: `0 4px 14px 0 ${ThemeVars.errorMain}`,
    info: `0 4px 14px 0 ${ThemeVars.infoMain}`,
    orange: "0 4px 14px 0 rgba(255, 152, 0, 0.6)",
  };
};

// Custom Typography styles
const CustomTypography = (): CustomTypography => {
  return {
    customInput: {
      marginTop: 1,
      marginBottom: 1,
      "& > label": {
        top: 23,
        left: 0,
        color: ThemeVars.grey500,
        '&[data-shrink="false"]': {
          top: 5,
        },
      },
      "& > div > input": {
        padding: "30.5px 14px 11.5px !important",
      },
      "& legend": {
        display: "none",
      },
      "& fieldset": {
        top: 0,
      },
    },
    mainContent: {
      backgroundColor: ThemeVars.background,
      width: "100%",
      minHeight: "calc(100vh - 88px)",
      flexGrow: 1,
      padding: "20px",
      marginTop: "88px",
      marginRight: "20px",
      borderRadius: `${ThemeConfig.borderRadius}px`,
    },
    menuCaption: {
      fontSize: "0.875rem",
      fontWeight: 500,
      color: ThemeVars.darkTextPrimary,
      padding: "6px",
      textTransform: "capitalize",
      marginTop: "10px",
    },
    subMenuCaption: {
      fontSize: "0.6875rem",
      fontWeight: 500,
      color: ThemeVars.darkTextSecondary,
      textTransform: "capitalize",
    },
    commonAvatar: {
      cursor: "pointer",
      borderRadius: "8px",
    },
    smallAvatar: {
      width: "22px",
      height: "22px",
      fontSize: "1rem",
    },
    mediumAvatar: {
      width: "34px",
      height: "34px",
      fontSize: "1.2rem",
    },
    largeAvatar: {
      width: "44px",
      height: "44px",
      fontSize: "1.5rem",
    },
  };
};

// Create Theme
export const theme = createTheme({
  palette: {
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
  },
  typography: {
    fontFamily: ThemeConfig.fontFamily,
    h6: {
      fontWeight: 600,
      fontSize: "1.25rem",
    },
    h5: {
      fontSize: "1.4375rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.5625rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.875rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "2.1875rem",
      fontWeight: 600,
    },
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: "0.875rem",
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: "0.75rem",
      fontWeight: 400,
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "1.334em",
    },
    body2: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: "1.5em",
      color: ThemeVars.textSecondary,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
        contained: {
          boxShadow: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: ThemeConfig.borderRadius,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: "16px",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "16px",
        },
      },
    },
  },
  customShadows: CustomShadows(),
  customTypography: CustomTypography(),
});

interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * Theme customization
 */
const ThemeCustomization: React.FC<ThemeProviderProps> = ({ children }) => {
  const { state } = useConfig();
  const { navType } = state.themeConfig;

  const theme = React.useMemo(() => {
    const themeOption = {
      colors: {}, // Will be populated by palette
      fontFamily: state.themeConfig.fontFamily,
      borderRadius: state.themeConfig.borderRadius,
    };

    // Create theme with palette, typography, shadows and component overrides
    let customTheme = createTheme({
      palette: Palette(navType as ThemeMode),
      typography: Typography(themeOption.fontFamily),
    });

    // Apply component style overrides
    customTheme = createTheme(customTheme, {
      components: componentStyleOverrides(customTheme),
    });

    return customTheme;
  }, [navType, state.themeConfig.fontFamily, state.themeConfig.borderRadius]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeCustomization;
