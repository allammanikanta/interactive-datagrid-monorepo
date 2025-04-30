/**
 *
 * This file is part of the DataGrid component.
 * It defines a UserMultiSelectCellRenderer component that renders a list of users based on the value passed to it.
 * The component is memoized to prevent unnecessary re-renders.
 * The component uses Material-UI's Tooltip component to display the list of users in a tooltip when hovered over.
 *
 */
import { Tooltip } from "@mui/material";
import React from "react";

import { CellRendererProps } from "../../types/dataGridTypes";

interface User {
  id: number;
  name: string;
  avatar?: string;
}

export const UserMultiSelectCellRenderer = React.memo(
  ({ value }: CellRendererProps<User[]>) => {
    if (!Array.isArray(value) || value.length === 0) {
      return <span>-</span>;
    }

    const maxVisible = 1;
    const visibleUsers = value.slice(0, maxVisible);
    const overflowUsers = value.slice(maxVisible);
    const overflowCount = overflowUsers.length;

    const tooltipContent = (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          padding: "4px 0",
        }}
      >
        {overflowUsers.map((user) => (
          <div
            key={user.id}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <img
              src={user.avatar}
              alt={user.name}
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "1px solid white",
                boxShadow: "0 0 2px rgba(0,0,0,0.3)",
              }}
            />
            <span style={{ fontSize: "14px" }}>{user.name}</span>
          </div>
        ))}
      </div>
    );

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          cursor: "pointer",
        }}
      >
        {visibleUsers.map((user) => (
          <div
            key={user.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <img
              src={user.avatar}
              alt={user.name}
              title={user.name}
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "1px solid white",
                boxShadow: "0 0 2px rgba(0,0,0,0.3)",
              }}
            />
            <span style={{ fontSize: "14px", fontWeight: 500 }}>
              {user.name}
            </span>
          </div>
        ))}

        {overflowCount > 0 && (
          <Tooltip title={tooltipContent}>
            <span
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                backgroundColor: "#e0e0e0",
                color: "#333",
                fontSize: "12px",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              +{overflowCount}
            </span>
          </Tooltip>
        )}
      </div>
    );
  }
);
