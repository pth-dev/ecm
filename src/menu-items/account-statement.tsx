import ReceiptIcon from "@mui/icons-material/Receipt";
import type { MenuItemType } from "./cases";

export const accountStatementMenu: MenuItemType = {
  id: "account-statement",
  title: "Sao Kê",
  type: "group",
  icon: ReceiptIcon,
  url: "/app/account-statement",
  children: [
    {
      id: "statement-generation",
      title: "Generate Statements",
      type: "item",
      url: "/app/statement-generation",
    },
    {
      id: "statement-history",
      title: "Statement History",
      type: "item",
      url: "/app/statement-history",
    },
    {
      id: "statement-templates",
      title: "Statement Templates",
      type: "item",
      url: "/app/statement-templates",
    },
  ],
};
