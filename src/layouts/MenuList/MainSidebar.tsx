import { Box, List, Typography } from "@mui/material";
import logo from "~/assets/logo.svg";
import menuItems from "~/menu-items";

import type { MenuItemType } from "~/menu-items/cases";
import NavItem from "./NavItem";

interface MainSidebarProps {
  width?: number;
  onMenuSelect?: (item: MenuItemType) => void;
  selectedMenu?: string;
}

const MainSidebar = ({
  width = 280,
  onMenuSelect,
  selectedMenu,
}: MainSidebarProps) => {
  const handleItemClick = (item: MenuItemType) => {
    if (onMenuSelect) {
      onMenuSelect(item);
    }
  };

  return (
    <Box className="main-sidebar" sx={{ width }}>
      {/* Logo */}
      <Box className="main-sidebar-header">
        <img src={logo} alt="BIDV Logo" />
        <Typography variant="h6" className="main-sidebar-title">
          ECM System
        </Typography>
      </Box>

      {/* Menu Items */}
      <List className="main-sidebar-menu">
        {menuItems.items.map((item) => (
          <NavItem
            key={item.id}
            item={item}
            onClick={() => handleItemClick(item)}
            isSelected={selectedMenu === item.id}
          />
        ))}
      </List>

      {/* Version */}
      <Box className="main-sidebar-footer">
        <Typography variant="caption" className="version-text">
          v1.0.0 © BIDV 2023
        </Typography>
      </Box>
    </Box>
  );
};

export default MainSidebar;
