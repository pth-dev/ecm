import PaymentsIcon from "@mui/icons-material/Payments";
import type { MenuItemType } from "./cases";

export const installmentMenu: MenuItemType = {
  id: "installment",
  title: "Trả Góp",
  type: "group",
  icon: PaymentsIcon,
  url: "/app/installment",
  children: [
    {
      id: "installment-plans",
      title: "Installment Plans",
      type: "item",
      url: "/app/installment-plans",
    },
    {
      id: "installment-applications",
      title: "Applications",
      type: "item",
      url: "/app/installment-applications",
    },
    {
      id: "installment-approval",
      title: "Approval",
      type: "item",
      url: "/app/installment-approval",
    },
  ],
};
