// import type React from "react";
// import { useState } from "react";
// import {
//   AppBar,
//   Box,
//   Button,
//   Card,
//   CardContent,
//   Drawer,
//   FormControl,
//   FormControlLabel,
//   FormLabel,
//   IconButton,
//   InputLabel,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   MenuItem,
//   Radio,
//   RadioGroup,
//   Select,
//   Tab,
//   Tabs,
//   TextField,
//   Toolbar,
//   Typography,
//   Avatar,
// } from "@mui/material";
// import Grid from "@mui/material/Grid";
// import { type SelectChangeEvent } from "@mui/material";

// import {
//   Menu as MenuIcon,
//   Search as SearchIcon,
//   Upload as UploadIcon,
//   Description as DescriptionIcon,
//   CreditCard,
//   Assessment,
//   Receipt,
//   MonetizationOn,
//   Atm,
//   Settings,
// } from "@mui/icons-material";

// const drawerWidth = 280;

// const sidebarItems = [
//   { text: "Cases", icon: <DescriptionIcon />, active: true },
//   { text: "Phát Hành Thẻ", icon: <CreditCard /> },
//   { text: "Trả Góp", icon: <MonetizationOn /> },
//   { text: "Đối Soát", icon: <Assessment /> },
//   { text: "Sao Kê", icon: <Receipt /> },
//   { text: "Thu Nợ TTD", icon: <MonetizationOn /> },
//   { text: "ATM", icon: <Atm /> },
//   { text: "Tham Số POS", icon: <Settings /> },
// ];

// const documents = [
//   { id: "GT000000001", name: "ecm_test" },
//   { id: "GT000000002", name: "ecm_test" },
//   { id: "GT000000003", name: "ecm_test" },
// ];

// const CasesPage = () => {
//   const [tabValue, setTabValue] = useState(0);
//   const [formData, setFormData] = useState({
//     maKho: "000000001",
//     maPOS: "",
//     nguoiKhoiTao: "DA001",
//     maCIF: "",
//     tenChuTSDB: "",
//     giaTriTSDB: "",
//     giaTriBaoDam: "",
//     loaiTien: "",
//     moTa: "",
//     trangThaiGiaoDich: "",
//     trangThaiHoSo: "",
//     hinhThuc: "gui-kho",
//     phongBan: "",
//     nghiepVu: "TP TCKT",
//     loaiHoSo: "TP TCKT",
//     maTSDB: "",
//     loaiTSDB: "BDS",
//     soHDTC: "",
//   });

//   const handleInputChange =
//     (field: string) =>
//     (
//       event:
//         | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//         | SelectChangeEvent
//     ) => {
//       setFormData((prev) => ({
//         ...prev,
//         [field]: event.target.value,
//       }));
//     };

//   const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
//     setTabValue(newValue);
//   };

//   return (
//     <Box sx={{ display: "flex", height: "100vh", bgcolor: "#f5f5f5" }}>
//       {/* App Bar */}
//       <AppBar
//         position="fixed"
//         sx={{
//           zIndex: (theme) => theme.zIndex.drawer + 1,
//           bgcolor: "#e8f4f8",
//           color: "#2e7d7b",
//           boxShadow: "none",
//           borderBottom: "1px solid #ddd",
//         }}
//       >
//         <Toolbar>
//           <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600 }}>
//             ENTERPRISE CONTENT MANAGEMENT
//           </Typography>
//           <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//             <Avatar sx={{ width: 32, height: 32, bgcolor: "#ffd700" }}>
//               <Typography variant="caption" sx={{ color: "#000" }}>
//                 M
//               </Typography>
//             </Avatar>
//             <Box>
//               <Typography variant="body2" sx={{ color: "#666" }}>
//                 UAT_Luu Hai Yen
//               </Typography>
//               <Typography variant="caption" sx={{ color: "#999" }}>
//                 P. Giao dich khach hang
//               </Typography>
//             </Box>
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Sidebar */}
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           "& .MuiDrawer-paper": {
//             width: drawerWidth,
//             boxSizing: "border-box",
//             bgcolor: "#2e7d7b",
//             color: "white",
//           },
//         }}
//       >
//         <Toolbar />
//         <Box sx={{ overflow: "auto", pt: 2 }}>
//           <Typography variant="body2" sx={{ px: 2, pb: 1, color: "#a0d4d2" }}>
//             Work
//           </Typography>
//           <List>
//             {sidebarItems.map((item) => (
//               <ListItem key={item.text} disablePadding>
//                 <ListItemButton
//                   sx={{
//                     mx: 1,
//                     borderRadius: 1,
//                     bgcolor: item.active
//                       ? "rgba(255,255,255,0.1)"
//                       : "transparent",
//                     "&:hover": { bgcolor: "rgba(255,255,255,0.05)" },
//                   }}
//                 >
//                   <ListItemIcon sx={{ color: "white", minWidth: 40 }}>
//                     {item.icon}
//                   </ListItemIcon>
//                   <ListItemText
//                     primary={item.text}
//                     primaryTypographyProps={{ fontSize: "0.875rem" }}
//                   />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>

//           <Typography
//             variant="body2"
//             sx={{ px: 2, py: 1, color: "#a0d4d2", mt: 2 }}
//           >
//             Cases
//           </Typography>
//           <List>
//             <ListItem disablePadding>
//               <ListItemButton
//                 sx={{
//                   mx: 1,
//                   borderRadius: 1,
//                   bgcolor: "rgba(255,255,255,0.15)",
//                 }}
//               >
//                 <ListItemText
//                   primary="Đề nghị nhập kho/gửi kho TSBD"
//                   primaryTypographyProps={{ fontSize: "0.8rem" }}
//                 />
//               </ListItemButton>
//             </ListItem>
//           </List>
//         </Box>
//       </Drawer>

//       {/* Main Content */}
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <Toolbar />

//         <Grid container spacing={3}>
//           {/* Form Section */}
//           <Grid size={{ xs: 12, md: 8 }}>
//             <Card sx={{ mb: 3 }}>
//               <CardContent>
//                 <Typography variant="h6" sx={{ mb: 3, color: "#333" }}>
//                   Thông tin chung
//                 </Typography>

//                 <Grid container spacing={3}>
//                   <Grid size={{ xs: 6 }}>
//                     <TextField
//                       fullWidth
//                       label="Mã kho"
//                       value={formData.maKho}
//                       onChange={handleInputChange("maKho")}
//                       size="small"
//                     />
//                   </Grid>

//                   <Grid size={{ xs: 6 }}>
//                     <FormControl fullWidth size="small">
//                       <InputLabel>Trạng thái giao dịch</InputLabel>
//                       <Select
//                         value={formData.trangThaiGiaoDich}
//                         onChange={handleInputChange("trangThaiGiaoDich")}
//                         label="Trạng thái giao dịch"
//                       >
//                         <MenuItem value="khoi-tao">Khởi tạo giao dịch</MenuItem>
//                       </Select>
//                     </FormControl>
//                   </Grid>

//                   <Grid size={{ xs: 6 }}>
//                     <FormControl fullWidth size="small">
//                       <InputLabel>Mã POS</InputLabel>
//                       <Select
//                         value={formData.maPOS}
//                         onChange={handleInputChange("maPOS")}
//                         label="Mã POS"
//                       >
//                         <MenuItem value="hoi-so-chinh">Hội sở chính</MenuItem>
//                       </Select>
//                     </FormControl>
//                   </Grid>

//                   <Grid size={{ xs: 6 }}>
//                     <FormControl fullWidth size="small">
//                       <InputLabel>Trạng thái hồ sơ</InputLabel>
//                       <Select
//                         value={formData.trangThaiHoSo}
//                         onChange={handleInputChange("trangThaiHoSo")}
//                         label="Trạng thái hồ sơ"
//                       >
//                         <MenuItem value="luu-kho">Lưu kho</MenuItem>
//                       </Select>
//                     </FormControl>
//                   </Grid>

//                   <Grid size={{ xs: 6 }}>
//                     <TextField
//                       fullWidth
//                       label="Người khởi tạo"
//                       value={formData.nguoiKhoiTao}
//                       onChange={handleInputChange("nguoiKhoiTao")}
//                       size="small"
//                     />
//                   </Grid>

//                   <Grid size={{ xs: 6 }}>
//                     <Box>
//                       <FormLabel
//                         component="legend"
//                         sx={{ mb: 1, fontSize: "0.875rem" }}
//                       >
//                         Hình thức *
//                       </FormLabel>
//                       <RadioGroup
//                         row
//                         value={formData.hinhThuc}
//                         onChange={handleInputChange("hinhThuc")}
//                       >
//                         <FormControlLabel
//                           value="nhap-kho"
//                           control={<Radio size="small" />}
//                           label="Nhập kho"
//                         />
//                         <FormControlLabel
//                           value="gui-kho"
//                           control={<Radio size="small" />}
//                           label="Gửi kho"
//                         />
//                       </RadioGroup>
//                     </Box>
//                   </Grid>

//                   <Grid size={{ xs: 6 }}>
//                     <TextField
//                       fullWidth
//                       label="Mã CIF chủ TSBD"
//                       value={formData.maCIF}
//                       onChange={handleInputChange("maCIF")}
//                       size="small"
//                       InputProps={{
//                         endAdornment: <SearchIcon sx={{ color: "#999" }} />,
//                       }}
//                     />
//                   </Grid>

//                   <Grid size={{ xs: 6 }}>
//                     <FormControl fullWidth size="small">
//                       <InputLabel>Phòng ban</InputLabel>
//                       <Select
//                         value={formData.phongBan}
//                         onChange={handleInputChange("phongBan")}
//                         label="Phòng ban"
//                       >
//                         <MenuItem value="">Chọn phòng ban</MenuItem>
//                       </Select>
//                     </FormControl>
//                   </Grid>

//                   <Grid size={{ xs: 6 }}>
//                     <TextField
//                       fullWidth
//                       label="Tên chủ TSDB"
//                       value={formData.tenChuTSDB}
//                       onChange={handleInputChange("tenChuTSDB")}
//                       size="small"
//                     />
//                   </Grid>

//                   <Grid size={{ xs: 6 }}>
//                     <FormControl fullWidth size="small">
//                       <InputLabel>Nghiệp vụ</InputLabel>
//                       <Select
//                         value={formData.nghiepVu}
//                         onChange={handleInputChange("nghiepVu")}
//                         label="Nghiệp vụ"
//                       >
//                         <MenuItem value="TP TCKT">TP TCKT</MenuItem>
//                       </Select>
//                     </FormControl>
//                   </Grid>

//                   <Grid size={{ xs: 6 }}>
//                     <TextField
//                       fullWidth
//                       label="Giá trị TSDB"
//                       value={formData.giaTriTSDB}
//                       onChange={handleInputChange("giaTriTSDB")}
//                       size="small"
//                     />
//                   </Grid>

//                   <Grid size={{ xs: 6 }}>
//                     <FormControl fullWidth size="small">
//                       <InputLabel>Loại hồ sơ *</InputLabel>
//                       <Select
//                         value={formData.loaiHoSo}
//                         onChange={handleInputChange("loaiHoSo")}
//                         label="Loại hồ sơ *"
//                       >
//                         <MenuItem value="TP TCKT">TP TCKT</MenuItem>
//                       </Select>
//                     </FormControl>
//                   </Grid>

//                   <Grid size={{ xs: 6 }}>
//                     <TextField
//                       fullWidth
//                       label="Giá trị bảo đảm tối đa theo HĐBD"
//                       value={formData.giaTriBaoDam}
//                       onChange={handleInputChange("giaTriBaoDam")}
//                       size="small"
//                     />
//                   </Grid>

//                   <Grid size={{ xs: 6 }}>
//                     <TextField
//                       fullWidth
//                       label="Mã TSBD"
//                       value={formData.maTSDB}
//                       onChange={handleInputChange("maTSDB")}
//                       size="small"
//                       InputProps={{
//                         endAdornment: <SearchIcon sx={{ color: "#999" }} />,
//                       }}
//                     />
//                   </Grid>

//                   <Grid size={{ xs: 6 }}>
//                     <FormControl fullWidth size="small">
//                       <InputLabel>Loại tiền</InputLabel>
//                       <Select
//                         value={formData.loaiTien}
//                         onChange={handleInputChange("loaiTien")}
//                         label="Loại tiền"
//                       >
//                         <MenuItem value="">Chọn loại tiền</MenuItem>
//                       </Select>
//                     </FormControl>
//                   </Grid>

//                   <Grid size={{ xs: 6 }}>
//                     <FormControl fullWidth size="small">
//                       <InputLabel>Loại TSBD *</InputLabel>
//                       <Select
//                         value={formData.loaiTSDB}
//                         onChange={handleInputChange("loaiTSDB")}
//                         label="Loại TSBD *"
//                       >
//                         <MenuItem value="BDS">BDS</MenuItem>
//                       </Select>
//                     </FormControl>
//                   </Grid>

//                   <Grid size={{ xs: 12 }}>
//                     <TextField
//                       fullWidth
//                       label="Mô tả"
//                       value={formData.moTa}
//                       onChange={handleInputChange("moTa")}
//                       multiline
//                       rows={3}
//                       size="small"
//                     />
//                   </Grid>

//                   <Grid size={{ xs: 12 }}>
//                     <TextField
//                       fullWidth
//                       label="Số HĐTC/HĐCC"
//                       value={formData.soHDTC}
//                       onChange={handleInputChange("soHDTC")}
//                       size="small"
//                     />
//                   </Grid>
//                 </Grid>
//               </CardContent>
//             </Card>
//           </Grid>

//           {/* Right Panel */}
//           <Grid size={{ xs: 12, md: 4 }}>
//             <Card sx={{ mb: 2 }}>
//               <CardContent>
//                 <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
//                   <Button
//                     variant="outlined"
//                     size="small"
//                     sx={{ borderColor: "#2e7d7b", color: "#2e7d7b" }}
//                   >
//                     Gửi phê duyệt
//                   </Button>
//                   <Button variant="outlined" size="small">
//                     Hủy
//                   </Button>
//                   <Button variant="outlined" size="small">
//                     Lưu
//                   </Button>
//                   <Button variant="outlined" size="small">
//                     Đóng
//                   </Button>
//                 </Box>
//                 <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
//                   <Button
//                     variant="contained"
//                     size="small"
//                     startIcon={<UploadIcon />}
//                     sx={{ bgcolor: "#2e7d7b" }}
//                   >
//                     Upload document
//                   </Button>
//                   <Button variant="outlined" size="small">
//                     Reference
//                   </Button>
//                 </Box>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardContent sx={{ p: 0 }}>
//                 <Tabs
//                   value={tabValue}
//                   onChange={handleTabChange}
//                   sx={{ borderBottom: 1, borderColor: "divider" }}
//                 >
//                   <Tab label="Documents" />
//                   <Tab label="History" />
//                 </Tabs>

//                 <Box sx={{ p: 2 }}>
//                   {documents.map((doc) => (
//                     <Box
//                       key={doc.id}
//                       sx={{
//                         display: "flex",
//                         alignItems: "center",
//                         gap: 1,
//                         py: 1,
//                       }}
//                     >
//                       <DescriptionIcon
//                         sx={{ color: "#2e7d7b", fontSize: 20 }}
//                       />
//                       <Box sx={{ flexGrow: 1 }}>
//                         <Typography variant="body2" sx={{ fontWeight: 500 }}>
//                           {doc.id}
//                         </Typography>
//                         <Typography variant="caption" sx={{ color: "#666" }}>
//                           {doc.name}
//                         </Typography>
//                       </Box>
//                     </Box>
//                   ))}
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default CasesPage;
export default function CasesPage() {
  return <div>CasesPage</div>;
}
