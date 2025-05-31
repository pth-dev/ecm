import { Box, Typography, Paper } from "@mui/material";
import ContentLayout from "~/components/ui/ContentLayout";

const HomePage = () => {
  return (
    <ContentLayout title="Dashboard">
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to Enterprise Content Management System
        </Typography>

        <Typography variant="body1" sx={{ mt: 3, mb: 4 }}>
          This dashboard demonstrates the new sidebar navigation structure that
          uses the menu-items configuration. The sidebar now shows main menu
          items on the left and dynamically shows submenu items on the right
          when a main item is selected.
        </Typography>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            Main Features
          </Typography>
          <Typography variant="body1">
            • Dynamic sidebar with two levels of navigation
            <br />
            • Menu configuration through separate files
            <br />
            • Easily extendable by adding new menu items
            <br />
            • Active state tracking based on current route
            <br />• Automatic navigation to corresponding pages
          </Typography>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            How to Add a New Menu Item
          </Typography>
          <Typography variant="body1">
            To add a new menu item, simply create a new file in the menu-items
            directory with the proper structure:
          </Typography>
          <Box
            sx={{
              backgroundColor: "#f5f5f5",
              p: 2,
              mt: 2,
              borderRadius: 1,
              fontFamily: "monospace",
              fontSize: "0.9rem",
            }}
          >
            {`export const newMenu: MenuItemType = {
  id: "new-menu",
  title: "New Menu",
  type: "group",
  icon: SomeIcon,
  children: [
    {
      id: "submenu-1",
      title: "Submenu 1",
      type: "item",
      url: "/submenu-1"
    },
    // Add more submenu items here
  ]
};`}
          </Box>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Then add it to the <code>index.tsx</code> file in the menu-items
            directory to make it available in the sidebar.
          </Typography>
        </Paper>
      </Box>
    </ContentLayout>
  );
};

export default HomePage;
