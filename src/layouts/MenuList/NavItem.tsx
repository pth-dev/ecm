import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import type { MenuItemType } from "~/menu-items/cases";

interface NavItemProps {
  item: MenuItemType;
  onClick: () => void;
  isSelected?: boolean;
}

const NavItem = ({ item, onClick, isSelected = false }: NavItemProps) => {
  return (
    <ListItem disablePadding>
      <ListItemButton
        className={`nav-item-button ${isSelected ? "active" : ""}`}
        onClick={onClick}
      >
        {item.icon && (
          <ListItemIcon className="nav-item-icon">
            {React.createElement(item.icon)}
          </ListItemIcon>
        )}
        <ListItemText
          primary={item.title}
          className="nav-item-text"
          primaryTypographyProps={{
            fontWeight: isSelected ? 600 : 400,
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default NavItem;
