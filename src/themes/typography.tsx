import type { TypographyOptions } from "@mui/material/styles/createTypography";
import ThemeVars from "../assets/scss/_themes-vars.module.scss";

// Types
export interface CustomTypography {
  customInput?: {
    marginTop?: number;
    marginBottom?: number;
    "& > label"?: {
      top?: number;
      left?: number;
      color?: string;
      '&[data-shrink="false"]'?: {
        top?: number;
      };
    };
    "& > div > input"?: {
      padding?: string;
    };
    "& legend"?: {
      display?: string;
    };
    "& fieldset"?: {
      top?: number;
    };
  };
  mainContent?: React.CSSProperties;
  menuCaption?: React.CSSProperties;
  subMenuCaption?: React.CSSProperties;
  commonAvatar?: React.CSSProperties;
  smallAvatar?: React.CSSProperties;
  mediumAvatar?: React.CSSProperties;
  largeAvatar?: React.CSSProperties;
}

const Typography = (fontFamily: string): TypographyOptions => {
  return {
    fontFamily,
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
  };
};

export default Typography;
