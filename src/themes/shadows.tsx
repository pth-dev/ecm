import ThemeVars from "../assets/scss/_themes-vars.module.scss";

// Types
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

/**
 * Custom Shadow generator
 */
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

export default CustomShadows;
