import React from "react";
import { Chip as MuiChip } from "@mui/material";
import { styled } from "@mui/material/styles";
import type { ChipProps } from "@mui/material";

interface CustomChipProps extends ChipProps {
  chipcolor?:
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "info"
    | "default";
  variant?: "filled" | "outlined";
  size?: "small" | "medium";
}

const StyledChip = styled(MuiChip, {
  shouldForwardProp: (prop) => prop !== "chipcolor",
})<CustomChipProps>(({ theme, chipcolor, variant }) => {
  const colorStyle =
    chipcolor === "primary"
      ? {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.primary.light,
        }
      : chipcolor === "secondary"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: theme.palette.secondary.light,
        }
      : chipcolor === "success"
      ? {
          color: theme.palette.success.dark,
          backgroundColor: theme.palette.success.light,
        }
      : chipcolor === "error"
      ? {
          color: theme.palette.error.dark,
          backgroundColor: theme.palette.error.light,
        }
      : chipcolor === "warning"
      ? {
          color: theme.palette.warning.dark,
          backgroundColor: theme.palette.warning.light,
        }
      : chipcolor === "info"
      ? {
          color: theme.palette.info.dark,
          backgroundColor: theme.palette.info.light,
        }
      : {
          color: theme.palette.grey[900],
          backgroundColor: theme.palette.grey[200],
        };

  const outlinedStyle =
    chipcolor === "primary"
      ? {
          color: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        }
      : chipcolor === "secondary"
      ? {
          color: theme.palette.secondary.main,
          borderColor: theme.palette.secondary.main,
        }
      : chipcolor === "success"
      ? {
          color: theme.palette.success.dark,
          borderColor: theme.palette.success.dark,
        }
      : chipcolor === "error"
      ? {
          color: theme.palette.error.dark,
          borderColor: theme.palette.error.dark,
        }
      : chipcolor === "warning"
      ? {
          color: theme.palette.warning.dark,
          borderColor: theme.palette.warning.dark,
        }
      : chipcolor === "info"
      ? { color: theme.palette.info.dark, borderColor: theme.palette.info.dark }
      : {
          color: theme.palette.grey[900],
          borderColor: theme.palette.grey[400],
        };

  return {
    ...(variant === "outlined" ? outlinedStyle : colorStyle),
    borderRadius: "4px",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    "& .MuiChip-label": {
      fontWeight: 500,
    },
    "& .MuiChip-icon": {
      color: "inherit",
    },
    "& .MuiChip-deleteIcon": {
      color: "inherit",
      opacity: 0.7,
      "&:hover": {
        opacity: 1,
      },
    },
  };
});

const Chip: React.FC<CustomChipProps> = ({
  chipcolor = "default",
  variant = "filled",
  size = "medium",
  ...others
}) => {
  return (
    <StyledChip
      chipcolor={chipcolor}
      variant={variant}
      size={size}
      {...others}
    />
  );
};

export default Chip;
