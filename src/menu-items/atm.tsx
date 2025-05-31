import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import type { MenuItemType } from "./cases";

export const atmMenu: MenuItemType = {
  id: "atm",
  title: "ATM",
  type: "group",
  icon: LocalAtmIcon,
  url: "/app/atm",
  children: [
    {
      id: "atm-locations",
      title: "ATM Locations",
      type: "item",
      url: "/app/atm-locations",
    },
    {
      id: "atm-maintenance",
      title: "ATM Maintenance",
      type: "item",
      url: "/app/atm-maintenance",
    },
    {
      id: "atm-transactions",
      title: "ATM Transactions",
      type: "item",
      url: "/app/atm-transactions",
    },
  ],
};
