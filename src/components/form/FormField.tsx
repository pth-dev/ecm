// import { Box, TextField, Typography } from "@mui/material";
// import type { TextFieldProps } from "@mui/material";
// import colors from "~/styles/theme/colors";

// interface FormFieldProps extends Omit<TextFieldProps, "label"> {
//   label: string;
//   required?: boolean;
//   helperText?: string;
//   fullWidth?: boolean;
// }

// const FormField = ({
//   label,
//   required = false,
//   helperText,
//   fullWidth = true,
//   ...textFieldProps
// }: FormFieldProps) => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         width: fullWidth ? "100%" : "auto",
//         mb: 2,
//       }}
//     >
//       <Typography
//         variant="body2"
//         component="label"
//         sx={{
//           mb: 0.5,
//           fontWeight: 500,
//           color: colors.text.primary,
//         }}
//       >
//         {label}
//         {required && (
//           <Typography
//             component="span"
//             sx={{ color: colors.status.error, ml: 0.5 }}
//           >
//             *
//           </Typography>
//         )}
//       </Typography>

//       <TextField
//         size="small"
//         fullWidth={fullWidth}
//         helperText={helperText}
//         required={required}
//         {...textFieldProps}
//         sx={{
//           "& .MuiOutlinedInput-root": {
//             "& fieldset": {
//               borderColor: colors.border.main,
//             },
//             "&:hover fieldset": {
//               borderColor: colors.bidv.primary,
//             },
//             "&.Mui-focused fieldset": {
//               borderColor: colors.bidv.primary,
//             },
//           },
//           "& .MuiFormHelperText-root": {
//             marginLeft: 0,
//           },
//           ...textFieldProps.sx,
//         }}
//       />
//     </Box>
//   );
// };

// export default FormField;
