import { Box, Paper, Typography } from "@mui/material";

interface ContentLayoutProps {
  children: React.ReactNode;
  maxWidth?: number | string;
  padding?: number | string;
  fullHeight?: boolean;
  transparent?: boolean;
  title?: string;
}

const ContentLayout = ({
  children,
  maxWidth = 1400,
  padding = 3,
  fullHeight = false,
  transparent = false,
  title,
}: ContentLayoutProps) => {
  return (
    <Box
      className={`content-layout ${fullHeight ? "full-height" : ""}`}
      sx={{ padding: { xs: 2, md: padding } }}
    >
      <Box
        component={transparent ? "div" : Paper}
        className={`content-layout-container ${
          transparent ? "transparent" : ""
        }`}
        sx={{
          maxWidth,
          height: fullHeight ? "100%" : "auto",
        }}
      >
        {title && (
          <Box className="content-layout-header">
            <Typography variant="h5">{title}</Typography>
          </Box>
        )}
        {children}
      </Box>
    </Box>
  );
};

export default ContentLayout;
