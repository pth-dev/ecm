import CreditCardIcon from "@mui/icons-material/CreditCard";
import type { MenuItemType } from "./cases";

export const cardIssuingMenu: MenuItemType = {
  id: "card-issuing",
  title: "Phát Hành Thẻ",
  type: "group",
  icon: CreditCardIcon,
  url: "/app/card-issuing",
  children: [
    {
      id: "card-applications",
      title: "Card Applications",
      type: "item",
      url: "/app/card-applications",
    },
    {
      id: "card-approvals",
      title: "Card Approvals",
      type: "item",
      url: "/app/card-approvals",
    },
    {
      id: "card-delivery",
      title: "Card Delivery",
      type: "item",
      url: "/app/card-delivery",
    },
  ],
};
