import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import type { MenuItemType } from "~/menu-items/cases";

interface SubNavItemProps {
  item: MenuItemType;
  onClick: () => void;
  isSelected?: boolean;
}

const SubNavItem = ({ item, onClick, isSelected = false }: SubNavItemProps) => {
  return (
    <ListItem disablePadding>
      <ListItemButton
        className={`sub-nav-item-button ${isSelected ? "active" : ""}`}
        onClick={onClick}
      >
        <ListItemText
          primary={item.title}
          className={`sub-nav-item-text ${isSelected ? "active" : ""}`}
          primaryTypographyProps={{
            fontWeight: isSelected ? 600 : 400,
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default SubNavItem;
