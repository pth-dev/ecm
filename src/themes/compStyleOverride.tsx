import type { Theme } from "@mui/material/styles";
import ThemeVars from "../assets/scss/_themes-vars.module.scss";

/**
 * Component style overrides for Material UI
 */
export default function componentStyleOverrides(theme: Theme) {
  const borderRadius = 8;

  return {
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
          borderRadius,
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: "16px",
        },
        title: {
          fontSize: "1.125rem",
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
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: "16px",
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
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          "&.Mui-selected": {
            color: ThemeVars.primaryMain,
            backgroundColor: ThemeVars.primaryLight,
            "&:hover": {
              backgroundColor: ThemeVars.primaryLight,
            },
            "& .MuiListItemIcon-root": {
              color: ThemeVars.primaryMain,
            },
          },
          "&:hover": {
            backgroundColor: ThemeVars.grey100,
            "& .MuiListItemIcon-root": {
              color: ThemeVars.primaryMain,
            },
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "36px",
          color: ThemeVars.grey600,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          "&.MuiChip-deletable .MuiChip-deleteIcon": {
            color: "inherit",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: ThemeVars.grey200,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          color: ThemeVars.primaryDark,
          background: ThemeVars.primary200,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: ThemeVars.paper,
          background: ThemeVars.grey700,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${ThemeVars.grey200}`,
        },
      },
    },
  };
}
