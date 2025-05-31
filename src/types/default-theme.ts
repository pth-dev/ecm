declare module "@mui/material/styles" {
  interface CustomPalette {
    primary200: string;
    primary800: string;
    secondary200: string;
    secondary800: string;
    borderLight: string;
    borderMain: string;
    borderDark: string;
  }

  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}

  interface TypeBackground {
    light?: string;
    hover?: string;
  }
}

export interface CustomizationProps {
  fontFamily: string;
  borderRadius: number;
  navType: string; // light / dark
  presetColor: string; // default / theme1 / theme2
  locale: string;
}

export interface CustomTypography {
  customInput: {
    marginTop: number;
    marginBottom: number;
    "& > label": {
      top: number;
      left: number;
      color: string;
      '&[data-shrink="false"]': {
        top: number;
      };
    };
    "& > div > input": {
      padding: string;
    };
    "& legend": {
      display: string;
    };
    "& fieldset": {
      top: number;
    };
  };
  mainContent: {
    backgroundColor: string;
    width: string;
    minHeight: string;
    flexGrow: number;
    padding: string;
    marginTop: string;
    marginRight: string;
    borderRadius: string;
  };
  menuCaption: {
    fontSize: string;
    fontWeight: number;
    color: string;
    padding: string;
    textTransform: string;
    marginTop: string;
  };
  subMenuCaption: {
    fontSize: string;
    fontWeight: number;
    color: string;
    textTransform: string;
  };
  commonAvatar: {
    cursor: string;
    borderRadius: string;
  };
  smallAvatar: {
    width: string;
    height: string;
    fontSize: string;
  };
  mediumAvatar: {
    width: string;
    height: string;
    fontSize: string;
  };
  largeAvatar: {
    width: string;
    height: string;
    fontSize: string;
  };
}

export interface CustomShadowProps {
  button: string;
  text: string;
  z1: string;
  z8: string;
  z12: string;
  z16: string;
  z20: string;
  z24: string;
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  error: string;
  info: string;
  orange: string;
}

declare module "@mui/material/styles" {
  interface Theme {
    customShadows: CustomShadowProps;
    customTypography: CustomTypography;
  }

  interface ThemeOptions {
    customShadows?: CustomShadowProps;
    customTypography?: CustomTypography;
  }
}
