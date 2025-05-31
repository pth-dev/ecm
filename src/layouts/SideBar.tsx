import React from "react";
import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import menuItems from "~/menu-items";
import type { MenuItemType } from "~/menu-items/cases";
import LogoSection from "./LogoSection";

interface SidebarProps {
  width?: number;
}

const Sidebar = ({ width = 90 }: SidebarProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleItemClick = (url: string | undefined) => {
    if (url) {
      navigate(url);
    }
  };

  const isActive = (url: string | undefined) => {
    if (!url) return false;
    return location.pathname.startsWith(url);
  };

  const getActiveStatus = (item: MenuItemType) => {
    const url =
      item.url ||
      (item.children && item.children.length > 0
        ? item.children[0].url
        : undefined);

    if (!url) return false;

    // Check direct match
    if (location.pathname.startsWith(url)) return true;

    // Check if any child is active
    if (item.children) {
      for (const child of item.children) {
        if (child.url && location.pathname.startsWith(child.url)) {
          return true;
        }
      }
    }

    return false;
  };

  return (
    <Box className="sidebar" sx={{ width }}>
      {/* Logo */}
      <LogoSection />

      {/* Menu Items Container */}
      <Box className="sidebar-menu-container">
        {/* Menu Items */}
        <Box className="sidebar-menu">
          {menuItems.items.map((item: MenuItemType) => {
            // Lấy URL từ item hoặc từ child đầu tiên nếu item không có URL
            const url =
              item.url ||
              (item.children && item.children.length > 0
                ? item.children[0].url
                : "");
            const isItemActive = getActiveStatus(item);

            return (
              <ListItem
                key={item.id}
                disablePadding
                className="sidebar-menu-item"
              >
                <ListItemButton
                  className={`sidebar-menu-button ${
                    isItemActive ? "active" : ""
                  }`}
                  onClick={() => handleItemClick(url)}
                >
                  {item.icon && (
                    <ListItemIcon>
                      {React.createElement(item.icon, { fontSize: "medium" })}
                    </ListItemIcon>
                  )}
                  <ListItemText
                    primary={item.title}
                    primaryTypographyProps={{
                      fontWeight: isItemActive ? 600 : 400,
                    }}
                    sx={{ margin: 0 }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
