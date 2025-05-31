import React from "react";
import { Avatar as MuiAvatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import type { AvatarProps } from "@mui/material";
import useTheme from "../hooks/useTheme";

interface CustomAvatarProps extends AvatarProps {
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "info"
    | "default";
  size?: "small" | "medium" | "large";
  outline?: boolean;
}

const StyledAvatar = styled(MuiAvatar, {
  shouldForwardProp: (prop) =>
    prop !== "color" && prop !== "size" && prop !== "outline",
})<CustomAvatarProps>(({ theme, color, size, outline }) => {
  const { theme: muiTheme } = useTheme();

  const backgroundColor =
    color === "primary"
      ? muiTheme.palette.primary.main
      : color === "secondary"
      ? muiTheme.palette.secondary.main
      : color === "success"
      ? muiTheme.palette.success.main
      : color === "error"
      ? muiTheme.palette.error.main
      : color === "warning"
      ? muiTheme.palette.warning.main
      : color === "info"
      ? muiTheme.palette.info.main
      : muiTheme.palette.grey[500];

  const borderColor =
    color === "primary"
      ? muiTheme.palette.primary.light
      : color === "secondary"
      ? muiTheme.palette.secondary.light
      : color === "success"
      ? muiTheme.palette.success.light
      : color === "error"
      ? muiTheme.palette.error.light
      : color === "warning"
      ? muiTheme.palette.warning.light
      : color === "info"
      ? muiTheme.palette.info.light
      : muiTheme.palette.grey[300];

  const sizeValue = size === "small" ? 24 : size === "large" ? 48 : 36;

  return {
    backgroundColor,
    color: "#fff",
    width: sizeValue,
    height: sizeValue,
    fontSize:
      size === "small" ? "0.75rem" : size === "large" ? "1.5rem" : "1rem",
    border: outline ? `2px solid ${borderColor}` : "none",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  };
});

const Avatar: React.FC<CustomAvatarProps> = ({
  children,
  color = "default",
  size = "medium",
  outline = false,
  ...others
}) => {
  return (
    <StyledAvatar color={color} size={size} outline={outline} {...others}>
      {children}
    </StyledAvatar>
  );
};

export default Avatar;
