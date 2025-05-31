import { Box } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "~/layouts/SideBar";
import AppHeader from "~/components/ui/AppHeader";
// import SubMenu from "~/components/ui/SubMenu";
import menuItems from "~/menu-items";
import type { MenuItemType } from "~/menu-items/cases";

interface MainLayoutProps {
  title?: string;
  children?: React.ReactNode;
}

const MainLayout = ({ title, children }: MainLayoutProps) => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState<MenuItemType | undefined>();

  // Tìm menu item active dựa vào URL hiện tại
  useEffect(() => {
    const currentPath = location.pathname;

    // Tìm menu item phù hợp với URL hiện tại
    const findActiveMenu = () => {
      for (const menuItem of menuItems.items) {
        if (menuItem.url && currentPath.startsWith(menuItem.url)) {
          setActiveMenu(menuItem);
          return;
        }

        // Kiểm tra submenu items
        if (menuItem.children) {
          for (const subItem of menuItem.children) {
            if (subItem.url && currentPath.startsWith(subItem.url)) {
              setActiveMenu(menuItem);
              return;
            }
          }
        }
      }
    };

    findActiveMenu();
  }, [location.pathname]);

  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Submenu (nếu có) */}
      {/* <SubMenu activeMenu={activeMenu} /> */}

      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <AppHeader title={title} />

        {/* Page Content */}
        <Box
          sx={{
            flexGrow: 1,
            overflow: "auto",
            padding: 2,
            backgroundColor: "#f5f5f5",
          }}
        >
          {children || <Outlet />}
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
