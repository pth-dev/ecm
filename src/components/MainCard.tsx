import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import type { CardProps } from "@mui/material";
import { gridSpacing } from "../constants/theme";

interface MainCardProps extends CardProps {
  border?: boolean;
  boxShadow?: boolean;
  children: React.ReactNode;
  content?: boolean;
  contentSX?: React.CSSProperties;
  darkTitle?: boolean;
  divider?: boolean;
  elevation?: number;
  secondary?: React.ReactNode;
  shadow?: string;
  sx?: React.CSSProperties;
  title?: React.ReactNode;
}

// Styled Card component
const StyledCard = styled(Card)(({ theme }) => ({
  padding: "16px",
  overflow: "hidden",
  position: "relative",
  background: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
  "&:hover": {
    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.15)",
    transition: "all 0.3s ease-in-out",
  },
}));

// Styled Title component
const StyledTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1.125rem",
  color: theme.palette.text.primary,
}));

const MainCard: React.FC<MainCardProps> = ({
  border = true,
  boxShadow,
  children,
  content = true,
  contentSX = {},
  darkTitle,
  divider = true,
  elevation,
  secondary,
  shadow,
  sx = {},
  title,
  ...others
}) => {
  return (
    <StyledCard
      elevation={elevation || 0}
      sx={{
        ...sx,
        border: border ? "1px solid" : "none",
        borderColor: border ? "primary.light" : "none",
        boxShadow: boxShadow ? shadow : "none",
      }}
      {...others}
    >
      {/* card header and action */}
      {title && (
        <CardHeader
          sx={{ p: 2.5 }}
          title={<StyledTitle>{title}</StyledTitle>}
          action={secondary}
        />
      )}

      {/* content & header divider */}
      {title && divider && <Divider />}

      {/* card content */}
      {content && (
        <CardContent sx={{ p: 2.5, ...contentSX }}>{children}</CardContent>
      )}
      {!content && children}
    </StyledCard>
  );
};

export default MainCard;
