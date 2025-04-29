/**
 *
 * This file is part of the DataGrid component.
 * It defines a LinkCellRenderer component that renders a link based on the value passed to it.
 * The component is memoized to prevent unnecessary re-renders.
 *
 *  */
import React from "react";

import { CellRendererProps } from "../../types/dataGridTypes";

export const LinkCellRenderer = React.memo(
  ({ value }: CellRendererProps<string>) => {
    if (typeof value !== "string") {
      return <span>-</span>;
    }
    return (
      <a
        href={`/${value}`} // Assuming the value is a path
        target="_blank" // Open link in a new tab
        rel="noopener noreferrer" // Prevents security vulnerabilities
        style={{ color: "blue", textDecoration: "underline" }}
      >
        {value}
      </a>
    );
  }
);
