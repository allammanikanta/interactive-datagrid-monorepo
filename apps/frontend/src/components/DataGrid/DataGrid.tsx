import { Box } from "@mui/material";
import {
  DataGrid,
  GridRenderCellParams,
  GridRenderEditCellParams,
} from "@mui/x-data-grid";
import React, { useMemo, useState } from "react";

import { usePaginatedTasks } from "../../hooks/useTasks";
import { columns as columnDefs } from "../../utils/constants";
import { CellEditorRegistry } from "./CellEditorRegistry";
import { CellRendererRegistry } from "./CellRendererRegistry";
import { setupCellEditors } from "./setupCellEditors";
import { setupCellRenderers } from "./setupCellRenderers";

// Initialize cell renderers and editors
setupCellRenderers();
setupCellEditors();

const CustomDataGridComponent = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 5,
  });

  // Fetch paginated data using the custom hook
  const { data, isLoading } = usePaginatedTasks(
    paginationModel.page,
    paginationModel.pageSize
  );

  const rowCountRef = React.useRef(data?.totalRowCount || 0);

  const rowCount = React.useMemo(() => {
    if (data?.rowCount !== undefined) {
      rowCountRef.current = data.rowCount;
    }
    return rowCountRef.current;
  }, [data?.rowCount]);

  // const rowCount = useMemo(() => {
  //   return data?.rowCount;
  // }, [data]);

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
    <Box sx={{ height: 450, width: "100%" }}>
      <DataGrid
        rows={data?.rows || []} // Use the fetched data
        rowCount={rowCount} // Total number of rows for server-side pagination
        columns={columns}
        getRowId={(row) => row.id}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: paginationModel,
          },
        }}
        loading={isLoading}
        pageSizeOptions={[5, 10, 20]}
        paginationMode="server" // Enable server-side pagination
        paginationModel={paginationModel}
        onPaginationModelChange={(newPaginationModel) => {
          setPaginationModel(newPaginationModel); // Update the page and page size when pagination changes
        }}
        sx={{
          // Styling for the column headers
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: "#816EC7",
            color: "white",
            fontWeight: 600,
            fontSize: 14,
            borderBottom: "2px solid #816EC7",
          },
          // Styling for pagination controls
          "& .MuiPaginationItem-root": {
            color: "#816EC7",
          },
          // Styling for the footer pagination
          "& .MuiTablePagination-root": {
            color: "#816EC7",
          },
        }}
      />
    </Box>
  );
};

// Memoized the component to prevent unnecessary re-renders
const CustomDataGrid = React.memo(CustomDataGridComponent);

export default CustomDataGrid;
