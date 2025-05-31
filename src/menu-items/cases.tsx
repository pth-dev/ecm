import FolderIcon from "@mui/icons-material/Folder";
import type { SvgIconComponent } from "@mui/icons-material";

// Types
export interface MenuItemType {
  id: string;
  title: string;
  type: "item" | "group" | "collapse";
  icon?: SvgIconComponent;
  url?: string;
  children?: MenuItemType[];
}

export const casesMenu: MenuItemType = {
  id: "cases",
  title: "Cases",
  type: "group",
  icon: FolderIcon,
  url: "/app/cases",
  children: [
    {
      id: "work",
      title: "Work",
      type: "item",
      url: "/dashboard",
    },
    {
      id: "cases-sub",
      title: "Cases",
      type: "item",
      url: "/app/cases",
    },
    {
      id: "warehouse-request",
      title: "Warehouse Request",
      type: "item",
      url: "/app/warehouse-request",
    },
  ],
};
