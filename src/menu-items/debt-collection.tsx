import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import type { MenuItemType } from "./cases";

export const debtCollectionMenu: MenuItemType = {
  id: "debt-collection",
  title: "Thu Nợ TTD",
  type: "group",
  icon: MoneyOffIcon,
  url: "/app/debt-collection",
  children: [
    {
      id: "overdue-accounts",
      title: "Overdue Accounts",
      type: "item",
      url: "/app/overdue-accounts",
    },
    {
      id: "collection-tasks",
      title: "Collection Tasks",
      type: "item",
      url: "/app/collection-tasks",
    },
    {
      id: "payment-arrangements",
      title: "Payment Arrangements",
      type: "item",
      url: "/app/payment-arrangements",
    },
  ],
};
