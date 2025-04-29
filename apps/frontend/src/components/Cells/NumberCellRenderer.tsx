/**
 *
 * This file is part of the DataGrid component.
 * It defined a NumberCellRenderer component that renders a number based on the value passed to it.
 * The component is memoized to prevent unnecessary re-renders.
 *
 */
import React from "react";

import { CellRendererProps } from "../../types/dataGridTypes";

export const NumberCellRenderer = React.memo(({ value }: CellRendererProps) => {
  if (typeof value !== "number") {
    return <span>-</span>;
  }
  return <span>{value.toLocaleString()}</span>;
});
