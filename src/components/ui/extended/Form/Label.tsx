// material-ui
import { InputLabel } from "@mui/material";
import type { InputLabelProps, SxProps, Theme } from "@mui/material";
import type { ReactNode } from "react";

type TLabelProps = {
  name: string;
  label: string | ReactNode;
  other?: InputLabelProps;
  required?: boolean;
  sx?: SxProps<Theme>;
};

const Label = (props: TLabelProps) => {
  const { name, label, other, required, sx } = props;
  return (
    <InputLabel
      htmlFor={name}
      required={required}
      {...other}
      sx={{ textTransform: "capitalize", ...sx }}
    >
      {label}
    </InputLabel>
  );
};

Label.defaultProps = {
  name: "",
  label: "",
  required: false,
};

export default Label;
