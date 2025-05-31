import SettingsIcon from "@mui/icons-material/Settings";
import type { MenuItemType } from "./cases";

export const parametersMenu: MenuItemType = {
  id: "parameters",
  title: "Tham Số POS",
  type: "group",
  icon: SettingsIcon,
  url: "/app/parameters",
  children: [
    {
      id: "system-settings",
      title: "System Settings",
      type: "item",
      url: "/app/system-settings",
    },
    {
      id: "user-management",
      title: "User Management",
      type: "item",
      url: "/app/user-management",
    },
    {
      id: "configuration",
      title: "Configuration",
      type: "item",
      url: "/app/configuration",
    },
  ],
};
