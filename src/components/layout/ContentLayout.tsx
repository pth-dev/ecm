import { Box, Typography, type BoxProps } from "@mui/material";

interface ContentLayoutProps extends BoxProps {
  title: string;
  action?: React.ReactNode;
}

export const ContentLayout = ({
  title,
  action,
  children,
  ...props
}: ContentLayoutProps) => {
  return (
    <Box {...props}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h6">{title}</Typography>
        {action}
      </Box>
      {children}
    </Box>
  );
};
