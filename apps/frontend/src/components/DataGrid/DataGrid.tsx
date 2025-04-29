import { Box } from "@mui/material";
import {
  DataGrid,
  GridRenderCellParams,
  GridRenderEditCellParams,
} from "@mui/x-data-grid";
import React, { useMemo } from "react";

import { columns as columnDefs, rows } from "../../utils/constants";
import { CellEditorRegistry } from "./CellEditorRegistry";
import { CellRendererRegistry } from "./CellRendererRegistry";
import { setupCellEditors } from "./setupCellEditors";
import { setupCellRenderers } from "./setupCellRenderers";

// Initialize cell renderers and editors
setupCellRenderers();
setupCellEditors();

const CustomDataGridComponent: React.FC = () => {
  const columns = useMemo(
    () =>
      columnDefs.map((colDef) => {
        const Renderer = CellRendererRegistry.getRenderer(colDef.type);
        const Editor = CellEditorRegistry.getEditor?.(colDef.type);

        return {
          field: colDef.field,
          headerName: colDef.headerName,
          flex: 1,
          renderCell: Renderer
            ? (params: GridRenderCellParams) => {
                const adaptedProps = {
                  value: params.value,
                  rowData: params.row,
                  column: colDef, // from your `ColumnDefinition[]`
                };
                return <Renderer {...adaptedProps} />;
              }
            : undefined,
          renderEditCell: Editor
            ? (params: GridRenderEditCellParams) => {
                const adaptedProps = {
                  value: params.value,
                  rowData: params.row,
                  column: colDef,
                  onChange: (newValue: unknown) => {
                    params.api.setEditCellValue({
                      id: params.id,
                      field: params.field,
                      value: newValue,
                    });
                  },
                };
                return <Editor {...adaptedProps} />;
              }
            : undefined,

          editable: !!Editor,
        };
      }),
    []
  );

  return (
    <Box sx={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.id}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
      />
    </Box>
  );
};

// Memoized the component to prevent unnecessary re-renders
// React.memo will do a shallow comparison of props and only re-render if they change
const CustomDataGrid = React.memo(CustomDataGridComponent);

export default CustomDataGrid;
