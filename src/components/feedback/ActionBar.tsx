import { Box, type BoxProps, Button } from "@mui/material";

export interface ActionButton {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: "text" | "outlined" | "contained";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
}

interface ActionBarProps {
  actions: ActionButton[];
  containerProps?: BoxProps;
}

export const ActionBar = ({ actions, containerProps }: ActionBarProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        gap: 1,
        mb: 2,
      }}
      {...containerProps}
    >
      {actions.map((action, index) => (
        <Button
          key={index}
          onClick={action.onClick}
          disabled={action.disabled}
          variant={action.variant}
          color={action.color}
        >
          {action.label}
        </Button>
      ))}
    </Box>
  );
};
