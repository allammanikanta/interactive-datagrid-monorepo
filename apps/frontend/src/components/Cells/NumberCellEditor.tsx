/**
 * This component is a cell editor for a number field in a data grid.
 * Allows the user to edit the number directly in the cell.
 * Used Material-UI's TextField component to provide a user-friendly interface.
 *
 */
import { TextField } from "@mui/material";
import React, { useState } from "react";

interface NumberCellEditorProps {
  value: number;
  onChange: (newValue: number) => void;
}

const NumberCellEditor = ({ value, onChange }: NumberCellEditorProps) => {
  const [newValue, setNewValue] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = event.target.value;
    if (!isNaN(Number(newVal))) {
      setNewValue(Number(newVal)); // Ensure the value is a valid number
    }
  };

  const handleBlur = () => {
    onChange(newValue); // Update the value when the user clicks outside
  };

  return (
    <TextField
      type="number"
      value={newValue}
      onChange={handleChange}
      onBlur={handleBlur}
      fullWidth
      variant="standard"
      slotProps={{
        input: {
          disableUnderline: true,
        },
      }}
    />
  );
};

export default NumberCellEditor;
