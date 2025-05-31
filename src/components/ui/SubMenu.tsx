// import {
//   Box,
//   Typography,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
// } from "@mui/material";
// import { useLocation, useNavigate } from "react-router-dom";
// import colors from "~/styles/theme/colors";
// import type { MenuItemType } from "~/menu-items/cases";

// interface SubMenuProps {
//   activeMenu?: MenuItemType;
// }

// const SubMenu = ({ activeMenu }: SubMenuProps) => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   if (!activeMenu || !activeMenu.children || activeMenu.children.length === 0) {
//     return null;
//   }

//   const handleSubItemClick = (url: string | undefined) => {
//     if (url) {
//       navigate(url);
//     }
//   };

//   const isActive = (url: string | undefined) => {
//     if (!url) return false;
//     return location.pathname === url || location.pathname.startsWith(url);
//   };

//   return (
//     <Box
//       sx={{
//         width: 240,
//         backgroundColor: "#f5f5f5",
//         flexShrink: 0,
//         borderRight: `1px solid ${colors.border.light}`,
//       }}
//     >
//       {/* Header */}
//       <Box
//         sx={{
//           padding: "20px 16px",
//           borderBottom: `1px solid ${colors.border.light}`,
//         }}
//       >
//         <Typography variant="h6" color={colors.text.primary}>
//           {activeMenu.title}
//         </Typography>
//       </Box>

//       {/* Submenu Items */}
//       <List sx={{ padding: "8px 0" }}>
//         {activeMenu.children.map((item) => (
//           <ListItem key={item.id} disablePadding>
//             <ListItemButton
//               sx={{
//                 padding: "12px 16px",
//                 backgroundColor: isActive(item.url) ? "#B1E7E5" : "transparent",
//                 borderLeft: isActive(item.url)
//                   ? `4px solid ${colors.bidv.primary}`
//                   : "4px solid transparent",
//                 "&:hover": {
//                   backgroundColor: isActive(item.url)
//                     ? "#B1E7E5"
//                     : "rgba(0, 0, 0, 0.04)",
//                 },
//                 transition: "all 0.2s ease",
//               }}
//               onClick={() => handleSubItemClick(item.url)}
//             >
//               <ListItemText
//                 primary={item.title}
//                 primaryTypographyProps={{
//                   fontSize: "0.9rem",
//                   fontWeight: isActive(item.url) ? 600 : 400,
//                   color: isActive(item.url)
//                     ? colors.bidv.primary
//                     : colors.text.primary,
//                 }}
//               />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );
// };

// export default SubMenu;
