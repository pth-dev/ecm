import type { SvgIconComponent } from "@mui/icons-material";
import FolderIcon from "@mui/icons-material/Folder";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";

export interface SidebarSubItem {
  id: string;
  text: string;
  active?: boolean;
}

export interface SidebarItem {
  id: string;
  text: string;
  icon: SvgIconComponent;
  active?: boolean;
  subItems?: SidebarSubItem[];
}

export const casesSubItems: SidebarSubItem[] = [
  {
    id: "case-management",
    text: "Quản lý hồ sơ",
    active: true,
  },
];

export const sidebarItems: SidebarItem[] = [
  {
    id: "dashboard",
    text: "Trang chủ",
    icon: HomeIcon,
    active: true,
  },
  {
    id: "cases",
    text: "Hồ sơ",
    icon: FolderIcon,
    subItems: casesSubItems,
  },
  {
    id: "documents",
    text: "Tài liệu",
    icon: DescriptionIcon,
  },
  {
    id: "reports",
    text: "Báo cáo",
    icon: BarChartIcon,
  },
  {
    id: "users",
    text: "Người dùng",
    icon: PeopleIcon,
  },
  {
    id: "settings",
    text: "Cài đặt",
    icon: SettingsIcon,
  },
];
