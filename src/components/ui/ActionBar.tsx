// import { Box, Button, Typography } from "@mui/material";
// import type { ButtonProps } from "@mui/material";
// import SearchField from "~/components/form/SearchField";
// import AddIcon from "@mui/icons-material/Add";

// interface ActionButton {
//   text: string;
//   icon?: React.ReactNode;
//   onClick?: () => void;
//   variant?: ButtonProps["variant"];
//   color?: ButtonProps["color"];
// }

// interface ActionBarProps {
//   title: string;
//   subtitle?: string;
//   showSearch?: boolean;
//   onSearchChange?: (value: string) => void;
//   actions?: ActionButton[];
// }

// const ActionBar = ({
//   title,
//   subtitle,
//   showSearch = true,
//   onSearchChange,
//   actions = [],
// }: ActionBarProps) => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: { xs: "column", md: "row" },
//         justifyContent: "space-between",
//         alignItems: { xs: "flex-start", md: "center" },
//         gap: 2,
//         mb: 3,
//         pb: 2,
//         borderBottom: `1px solid ${colors.border.light}`,
//       }}
//     >
//       <Box>
//         <Typography variant="h5" fontWeight={600} color={colors.text.primary}>
//           {title}
//         </Typography>
//         {subtitle && (
//           <Typography variant="body2" color={colors.text.secondary} mt={0.5}>
//             {subtitle}
//           </Typography>
//         )}
//       </Box>

//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", sm: "row" },
//           gap: 2,
//           width: { xs: "100%", md: "auto" },
//           alignItems: { xs: "stretch", sm: "center" },
//         }}
//       >
//         {showSearch && (
//           <SearchField
//             placeholder="Tìm kiếm..."
//             onChange={(e) => onSearchChange?.(e.target.value)}
//             sx={{ width: { xs: "100%", sm: 240 } }}
//           />
//         )}

//         {actions.map((action, index) => (
//           <Button
//             key={index}
//             variant={action.variant || "contained"}
//             color={action.color || "primary"}
//             startIcon={
//               action.icon ||
//               (action.variant !== "text" ? <AddIcon /> : undefined)
//             }
//             onClick={action.onClick}
//             sx={{
//               backgroundColor:
//                 action.variant === "contained" && !action.color
//                   ? colors.bidv.primary
//                   : undefined,
//               whiteSpace: "nowrap",
//             }}
//           >
//             {action.text}
//           </Button>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default ActionBar;
