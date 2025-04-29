/**
 *
 * This file is part of the DataGrid component.
 * It defined a TextCellRenderer component that renders a text based on the value passed to it.
 * The component is memoized to prevent unnecessary re-renders.
 *
 */
import React from "react";

import { CellRendererProps } from "../../types/dataGridTypes";

export const TextCellRenderer = React.memo(({ value }: CellRendererProps) => {
  if (typeof value !== "string") {
    return <span>-</span>;
  }
  return <span>{value}</span>;
});
