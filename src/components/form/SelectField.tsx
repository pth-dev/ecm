import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import type { SelectProps } from "@mui/material";
import colors from "~/styles/theme/colors";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps extends Omit<SelectProps, "label"> {
  label: string;
  options: SelectOption[];
  required?: boolean;
  helperText?: string;
  fullWidth?: boolean;
}

const SelectField = ({
  label,
  options,
  required = false,
  helperText,
  fullWidth = true,
  ...selectProps
}: SelectFieldProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: fullWidth ? "100%" : "auto",
        mb: 2,
      }}
    >
      <Typography
        variant="body2"
        component="label"
        sx={{
          mb: 0.5,
          fontWeight: 500,
          color: colors.text.primary,
        }}
      >
        {label}
        {required && (
          <Typography
            component="span"
            sx={{ color: colors.status.error, ml: 0.5 }}
          >
            *
          </Typography>
        )}
      </Typography>

      <FormControl fullWidth={fullWidth} size="small">
        <Select
          displayEmpty
          {...selectProps}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: colors.border.main,
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: colors.bidv.primary,
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: colors.bidv.primary,
            },
            ...selectProps.sx,
          }}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {helperText && (
          <Typography
            variant="caption"
            sx={{
              mt: 0.5,
              ml: 1.5,
              color: colors.text.secondary,
            }}
          >
            {helperText}
          </Typography>
        )}
      </FormControl>
    </Box>
  );
};

export default SelectField;
