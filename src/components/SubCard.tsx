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

interface SubCardProps extends CardProps {
  children: React.ReactNode;
  content?: boolean;
  contentSX?: React.CSSProperties;
  darkTitle?: boolean;
  secondary?: React.ReactNode;
  sx?: React.CSSProperties;
  title?: React.ReactNode;
}

// Styled Card component
const StyledCard = styled(Card)(({ theme }) => ({
  border: `1px solid ${theme.palette.borderLight}`,
  background: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: "none",
  overflow: "hidden",
}));

// Styled Title component
const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: "0.875rem",
  fontWeight: 500,
  color: theme.palette.text.primary,
}));

const SubCard: React.FC<SubCardProps> = ({
  children,
  content = true,
  contentSX = {},
  darkTitle,
  secondary,
  sx = {},
  title,
  ...others
}) => {
  return (
    <StyledCard sx={sx} {...others}>
      {/* card header and action */}
      {title && (
        <CardHeader
          sx={{ p: 2 }}
          title={
            <StyledTitle sx={{ ...(darkTitle && { color: "text.primary" }) }}>
              {title}
            </StyledTitle>
          }
          action={secondary}
        />
      )}

      {/* content & header divider */}
      {title && <Divider />}

      {/* card content */}
      {content && (
        <CardContent sx={{ p: 2, ...contentSX }}>{children}</CardContent>
      )}
      {!content && children}
    </StyledCard>
  );
};

export default SubCard;
