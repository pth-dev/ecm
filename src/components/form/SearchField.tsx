// import {
//   Box,
//   Typography,
//   TextField,
//   InputAdornment,
//   IconButton,
//   type TextFieldProps,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import colors from "~/styles/theme/colors";

// interface SearchFieldProps extends Omit<TextFieldProps, "label" | "variant"> {
//   label?: string;
//   placeholder?: string;
//   fullWidth?: boolean;
// }

// const SearchField = ({
//   label,
//   placeholder = "Tìm kiếm...",
//   fullWidth = true,
//   ...textFieldProps
// }: SearchFieldProps) => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         width: fullWidth ? "100%" : "auto",
//       }}
//     >
//       {label && (
//         <Typography
//           variant="body2"
//           component="label"
//           sx={{
//             mb: 0.5,
//             fontWeight: 500,
//             color: colors.text.primary,
//           }}
//         >
//           {label}
//         </Typography>
//       )}

//       <TextField
//         placeholder={placeholder}
//         size="small"
//         fullWidth={fullWidth}
//         {...textFieldProps}
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start">
//               <SearchIcon sx={{ color: colors.text.secondary }} />
//             </InputAdornment>
//           ),
//           ...textFieldProps.InputProps,
//         }}
//         sx={{
//           "& .MuiOutlinedInput-root": {
//             backgroundColor: colors.white,
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
//           ...textFieldProps.sx,
//         }}
//       />
//     </Box>
//   );
// };

// export default SearchField;
