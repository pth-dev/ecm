import React from "react";
import { Table as MuiTable, styled } from "@mui/material";
import type { TableProps as MuiTableProps } from "@mui/material";

const StyledTable = styled(MuiTable)(({ theme }) => ({
  borderCollapse: "separate",
  borderSpacing: "0 8px",
  "& .MuiTableCell-root": {
    padding: "12px 16px",
  },
  "& .MuiTableRow-root": {
    backgroundColor: theme.palette.background.paper,
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));

export type TableProps = MuiTableProps;

const Table = React.forwardRef<HTMLTableElement, TableProps>((props, ref) => {
  return <StyledTable ref={ref} {...props} />;
});

Table.displayName = "Table";

export default Table;
