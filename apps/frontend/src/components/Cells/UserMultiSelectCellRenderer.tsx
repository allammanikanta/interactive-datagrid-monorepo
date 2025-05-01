/**
 *
 * This file is part of the DataGrid component.
 * It defines a UserMultiSelectCellRenderer component that renders a list of users based on the value passed to it.
 * The component is memoized to prevent unnecessary re-renders.
 * The component uses Material-UI's Tooltip component to display the list of users in a tooltip when hovered over.
 *
 */
import { Box, Tooltip } from "@mui/material";
import React from "react";

import { CellRendererProps } from "../../types/dataGridTypes";
import EmptyCell from "../EmptyCell";
import UserAvatar from "../UserAvatar";

interface User {
  id: number;
  name: string;
  avatar?: string;
}

export const UserMultiSelectCellRenderer = React.memo(
  ({ value }: CellRendererProps<User[]>) => {
    if (!Array.isArray(value) || value.length === 0) {
      return <EmptyCell />;
    }

    const maxVisible = 1;
    const visibleUsers = value.slice(0, maxVisible);
    const overflowUsers = value.slice(maxVisible);
    const overflowCount = overflowUsers.length;

    const tooltipContent = (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          padding: "4px 0",
        }}
      >
        {overflowUsers.map((user) => (
          <UserAvatar key={user.id} name={user.name} avatar={user.avatar} />
        ))}
      </Box>
    );

    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          cursor: "pointer",
        }}
      >
        {visibleUsers.map((user) => (
          <UserAvatar key={user.id} name={user.name} avatar={user.avatar} />
        ))}

        {overflowCount > 0 && (
          <Tooltip title={tooltipContent}>
            <Box
              sx={{
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
            </Box>
          </Tooltip>
        )}
      </Box>
    );
  }
);
