/**
 *
 * This file is part of the DataGrid component.
 * It defines a TagCellRenderer component that renders a tag based on the value passed to it.
 * The component is memoized to prevent unnecessary re-renders.
 * The component uses Material-UI's Chip component to display the tag.
 *
 */
import { Chip } from "@mui/material";
import React from "react";

import { CellRendererProps } from "../../types/dataGridTypes";
import { DATAGRID_CHIP_COLOR } from "../../utils/constants";
import EmptyCell from "../EmptyCell";

export const TagCellRenderer = React.memo(({ value }: CellRendererProps) => {
  if (typeof value !== "string") {
    return <EmptyCell />;
  }

  return (
    <Chip
      label={value}
      variant="outlined"
      style={{ color: DATAGRID_CHIP_COLOR, borderColor: DATAGRID_CHIP_COLOR }}
    />
  );
});
