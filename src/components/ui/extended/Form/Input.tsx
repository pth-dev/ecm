import React, { memo } from "react";
import type { ChangeEvent, ReactNode } from "react";

// material-ui
import { TextField } from "@mui/material";
import type { SxProps, TextFieldProps } from "@mui/material";

// react-hook-form
import { Controller, useFormContext } from "react-hook-form";
import type { ControllerRenderProps, FieldError } from "react-hook-form";

// project imports
import Label from "./Label";

interface IInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "id" | "className"
  > {
  name: string;
  label?: string | ReactNode;
  disabled?: boolean;
  textFieldProps?: TextFieldProps;
  required?: boolean;
  onChangeInput?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  sx?: SxProps<any>;
  styleLabel?: SxProps;
}

// Helper function to remove extra spaces
const removeExtraSpace = (str: string) => {
  if (typeof str !== "string") return str;
  return str.replace(/\s+/g, " ").trim();
};

const Input = (props: IInputProps) => {
  const {
    name,
    label,
    disabled,
    textFieldProps,
    required,
    type,
    onChangeInput,
    placeholder,
    sx,
    styleLabel,
  } = props;
  const methods = useFormContext();

  return (
    <Controller
      name={name}
      control={methods.control}
      render={({
        field: { value, ref, onChange, ...field },
        fieldState: { error },
      }: {
        field: ControllerRenderProps<any, string>;
        fieldState: { error?: FieldError };
      }) => {
        return (
          <>
            <Label
              name={name}
              label={label}
              required={required}
              sx={styleLabel}
            />
            <TextField
              type={type}
              id={name}
              {...field}
              value={value}
              size="small"
              disabled={disabled}
              onBlur={(e) => {
                return onChange(removeExtraSpace(value));
              }}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                onChange(e);
                onChangeInput?.(e);
              }}
              fullWidth
              placeholder={placeholder}
              error={!!error}
              helperText={error && error.message}
              inputRef={ref}
              sx={sx}
              {...textFieldProps}
            />
          </>
        );
      }}
    />
  );
};

export default memo(Input);
