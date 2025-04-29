/**
 *
 * This file is part of the DataGrid component.
 * It defines a UserMultiSelectCellEditor component that allows users to select multiple users from a list.
 * The component uses Material-UI's Autocomplete component to provide a user-friendly interface for selecting users.
 * The component is memoized to prevent unnecessary re-renders.
 *
 */
import {
  Autocomplete,
  Avatar,
  CircularProgress,
  TextField,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

import { useUsers } from "../../hooks/useUsers";
import { CellEditorProps } from "../../types/dataGridTypes";

interface User {
  id: number;
  name: string;
  avatar?: string;
}

export const UserMultiSelectCellEditor = React.memo(
  ({ value, onChange }: CellEditorProps<User[]>) => {
    const { data: users = [], isLoading, error } = useUsers();
    const [selectedUsers, setSelectedUsers] = useState<User[]>(value || []);
    const [open, setOpen] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);

    // useCallback will ensure that the handleUserChange function will only be recreated
    // when the onChange prop changes
    const handleUserChange = React.useCallback(
      (_: React.SyntheticEvent<Element, Event>, newValue: User[]) => {
        setSelectedUsers(newValue);
        onChange(newValue); // Pass new value to parent
      },
      [onChange]
    );

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        const autocompletePopper = document.querySelector(
          ".MuiAutocomplete-popper"
        );
        const target = event.target as Node;

        if (
          containerRef.current &&
          !containerRef.current.contains(target) &&
          (!autocompletePopper || !autocompletePopper.contains(target))
        ) {
          setOpen(false);
          onChange(selectedUsers);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [selectedUsers, onChange]);

    if (isLoading) {
      return <CircularProgress size={24} sx={{ margin: "auto" }} />;
    }

    if (error) {
      return <div>Error loading users.</div>;
    }

    return (
      <div ref={containerRef}>
        <Autocomplete
          multiple
          options={users}
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => {}}
          disableCloseOnSelect
          getOptionLabel={(option) => option.name}
          value={selectedUsers}
          onChange={handleUserChange}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          renderOption={(props, option, { selected }) => (
            <li
              {...props}
              key={option.id}
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <Avatar
                src={option.avatar}
                alt={option.name}
                sx={{ width: 24, height: 24 }}
              />
              {option.name}
              {selected && <span style={{ marginLeft: "auto" }}>✔️</span>}
            </li>
          )}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <span style={{ color: "#888" }}>No assignees</span>;
            }

            const visibleUser = selected[0];
            const overflowCount = selected.length - 1;

            return (
              <div
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <Avatar
                  src={visibleUser.avatar}
                  alt={visibleUser.name}
                  sx={{ width: 24, height: 24 }}
                />
                <span style={{ fontSize: "14px", fontWeight: 500 }}>
                  {visibleUser.name}
                </span>

                {overflowCount > 0 && (
                  <span
                    title={`${overflowCount} more`}
                    style={{
                      marginLeft: "8px",
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
                )}
              </div>
            );
          }}
          renderInput={(params) => <TextField {...params} variant="outlined" />}
          size="small"
          fullWidth
        />
      </div>
    );
  }
);
