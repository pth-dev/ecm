import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import type { MenuItemType } from "./cases";

export const reconciliationMenu: MenuItemType = {
  id: "reconciliation",
  title: "Đối Soát",
  type: "group",
  icon: CompareArrowsIcon,
  url: "/app/reconciliation",
  children: [
    {
      id: "transaction-matching",
      title: "Transaction Matching",
      type: "item",
      url: "/app/transaction-matching",
    },
    {
      id: "discrepancy-reports",
      title: "Discrepancy Reports",
      type: "item",
      url: "/app/discrepancy-reports",
    },
    {
      id: "settlement",
      title: "Settlement",
      type: "item",
      url: "/app/settlement",
    },
  ],
};
