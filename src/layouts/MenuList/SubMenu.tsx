import { Box, List, Typography } from "@mui/material";
import type { MenuItemType } from "~/menu-items/cases";
import SubNavItem from "./NavItem";

interface SubMenuProps {
  selectedMenu?: MenuItemType;
  onSubItemClick?: (item: MenuItemType) => void;
  selectedSubItem?: string;
  width?: number;
}

const SubMenu = ({
  selectedMenu,
  onSubItemClick,
  selectedSubItem,
  width = 240,
}: SubMenuProps) => {
  if (
    !selectedMenu ||
    !selectedMenu.children ||
    selectedMenu.children.length === 0
  ) {
    return null;
  }

  const handleSubItemClick = (item: MenuItemType) => {
    if (onSubItemClick) {
      onSubItemClick(item);
    }
  };

  return (
    <Box className="sub-menu" sx={{ width }}>
      {/* Menu Title */}
      <Box className="sub-menu-header">
        <Typography variant="subtitle1" className="sub-menu-title">
          {selectedMenu.title}
        </Typography>
      </Box>

      {/* Sub Items */}
      <List className="sub-menu-list">
        {selectedMenu.children.map((item) => (
          <SubNavItem
            key={item.id}
            item={item}
            onClick={() => handleSubItemClick(item)}
            isSelected={selectedSubItem === item.id}
          />
        ))}
      </List>
    </Box>
  );
};

export default SubMenu;
