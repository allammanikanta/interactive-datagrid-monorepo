// /**
//  *
//  * This file is part of the DataGrid component.
//  * It defined a TextCellRenderer component that renders a text based on the value passed to it.
//  * The component is memoized to prevent unnecessary re-renders.
//  *
//  */
// import React from "react";
import { Box, Tooltip } from "@mui/material";
import React from "react";

import { CellRendererProps } from "../../types/dataGridTypes";
import EmptyCell from "../EmptyCell";

export const TextCellRenderer = React.memo(({ value }: CellRendererProps) => {
  if (typeof value !== "string") {
    return <EmptyCell />;
  }

  return (
    <Tooltip title={value} arrow>
      <Box
        sx={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "block",
          maxWidth: "100%",
        }}
      >
        {value}
      </Box>
    </Tooltip>
  );
});
