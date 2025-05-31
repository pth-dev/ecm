import { Chip } from "@mui/material";
import type { ChipProps } from "@mui/material";
import colors from "~/styles/theme/colors";

export type StatusType =
  | "success"
  | "warning"
  | "error"
  | "info"
  | "pending"
  | "default";

interface StatusChipProps extends Omit<ChipProps, "color"> {
  status: StatusType;
  label: string;
}

const getStatusColor = (status: StatusType) => {
  switch (status) {
    case "success":
      return {
        bgcolor: "rgba(40, 167, 69, 0.1)",
        color: colors.status.success,
      };
    case "warning":
      return {
        bgcolor: "rgba(255, 193, 7, 0.1)",
        color: colors.status.warning,
      };
    case "error":
      return {
        bgcolor: "rgba(220, 53, 69, 0.1)",
        color: colors.status.error,
      };
    case "info":
      return {
        bgcolor: "rgba(23, 162, 184, 0.1)",
        color: colors.status.info,
      };
    case "pending":
      return {
        bgcolor: "rgba(108, 117, 125, 0.1)",
        color: colors.status.pending,
      };
    default:
      return {
        bgcolor: "rgba(90, 106, 133, 0.1)",
        color: colors.text.secondary,
      };
  }
};

const StatusChip = ({ status, label, ...chipProps }: StatusChipProps) => {
  const statusColor = getStatusColor(status);

  return (
    <Chip
      label={label}
      variant="filled"
      size="small"
      {...chipProps}
      sx={{
        ...statusColor,
        fontWeight: 500,
        borderRadius: 1,
        ...chipProps.sx,
      }}
    />
  );
};

export default StatusChip;
