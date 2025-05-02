/**
 * This file is part of the DataGrid component.
 * TextCellEditor component allows users to edit text values in a cell.
 * Uses Material-UI's TextField component for input.
 */
import { TextField } from "@mui/material";
import React, { useState } from "react";

interface TextCellEditorProps {
  value: string;
  onChange: (newValue: string) => void;
}

const TextCellEditor: React.FC<TextCellEditorProps> = ({ value, onChange }) => {
  const [newValue, setNewValue] = useState<string>(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewValue(event.target.value);
  };

  const handleBlur = () => {
    onChange(newValue);
  };

  return (
    <TextField
      type="text"
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

export default React.memo(TextCellEditor);
