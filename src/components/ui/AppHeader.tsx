import { Avatar, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface AppHeaderProps {
  title?: string;
}

const AppHeader = ({
  title = "ENTERPRISE CONTENT MANAGEMENT",
}: AppHeaderProps) => {
  return (
    <Box className="app-header">
      <Box className="app-header-left">
        <IconButton className="app-header-menu-button" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className="app-header-title">
          {title}
        </Typography>
      </Box>

      <Box className="app-header-right">
        <Avatar className="app-header-avatar">M</Avatar>
        <Box>
          <Typography className="app-header-user-name">
            UAT_Luu Hai Yen
          </Typography>
          <Typography className="app-header-user-dept">
            P. Giao dịch khách hàng
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AppHeader;
