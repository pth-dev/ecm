import { Button as MuiButton, type ButtonProps } from "@mui/material";

export type CustomButtonVariant = "approval" | "cancel";

export interface AppButtonProps extends Omit<ButtonProps, "variant"> {
  customVariant?: CustomButtonVariant;
}

export const Button = ({
  customVariant,
  children,
  ...props
}: AppButtonProps) => {
  const getButtonStyles = () => {
    switch (customVariant) {
      case "approval":
        return {
          color: "success" as const,
          variant: "contained" as const,
        };
      case "cancel":
        return {
          color: "error" as const,
          variant: "outlined" as const,
        };
      default:
        return {};
    }
  };

  const customStyles = getButtonStyles();

  return (
    <MuiButton
      {...props}
      {...customStyles}
      sx={{
        borderRadius: 1,
        textTransform: "none",
        fontWeight: 500,
        ...props.sx,
      }}
    >
      {children}
    </MuiButton>
  );
};
