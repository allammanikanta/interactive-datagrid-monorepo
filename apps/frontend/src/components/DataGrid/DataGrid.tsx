import { Box } from "@mui/material";
import {
  DataGrid,
  GridRenderCellParams,
  GridRenderEditCellParams,
} from "@mui/x-data-grid";
import React, { useCallback, useMemo, useState } from "react";

import { usePaginatedTasks } from "../../hooks/useTasks";
import useUpdateTaskApi from "../../hooks/useUpdateTask";
import {
  APP_THEME_COLOR,
  columns as columnDefs,
  DATAGRID_DEAULT_PAGE_NUM,
  DATAGRID_ERROR_MESSAGE,
  DATAGRID_HEIGHT,
  DATAGRID_MIN_WIDTH,
  DATAGRID_PAGE_SIZE,
  DATAGRID_PAGE_SIZE_OPTIONS,
} from "../../utils/constants";
import SnackbarNotifier from "../SnackbarNotifier";
import { CellEditorRegistry } from "./CellEditorRegistry";
import { CellRendererRegistry } from "./CellRendererRegistry";
import { setupCellEditors } from "./setupCellEditors";
import { setupCellRenderers } from "./setupCellRenderers";

// Initialize cell renderers and editors
setupCellRenderers();
setupCellEditors();

const CustomDataGridComponent = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: DATAGRID_DEAULT_PAGE_NUM,
    pageSize: DATAGRID_PAGE_SIZE,
  });

  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string }>({
    open: false,
    message: "",
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

  const updateTaskApi = useUpdateTaskApi();

  // Handle cell commit by delegating to the hook
  const handleCellEditCommit = useCallback(
    async (params: GridRenderEditCellParams) => {
      const { id, field, value, api, row } = params;
      const originalValue = row[field];

      try {
        await updateTaskApi(id as string, field, value);
      } catch {
        // Taking the optimistic approach and reverting the cell value
        // if the API call fails
        api.setEditCellValue({ id, field, value: originalValue });
        setSnackbar({
          open: true,
          message: DATAGRID_ERROR_MESSAGE,
        });
      }
    },
    [updateTaskApi]
  );

  // Define columns using the column definitions for the data grid
  const columns = useMemo(
    () =>
      columnDefs.map((colDef) => {
        const Renderer = CellRendererRegistry.getRenderer(colDef.type);
        const Editor = CellEditorRegistry.getEditor?.(colDef.type);

        return {
          field: colDef.field,
          headerName: colDef.headerName,
          flex: 1,
          minWidth: DATAGRID_MIN_WIDTH,
          renderCell: Renderer
            ? (params: GridRenderCellParams) => {
                const adaptedProps = {
                  value: params.value,
                  rowData: params.row,
                  column: colDef,
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
                    const updatedParams = {
                      ...params,
                      value: newValue,
                    };
                    params.api.setEditCellValue(updatedParams);
                    handleCellEditCommit(updatedParams);
                  },
                };
                return Editor && <Editor {...adaptedProps} />;
              }
            : undefined,

          editable: !!Editor,
        };
      }),
    [handleCellEditCommit]
  );

  const handleCloseSnackbar = () => {
    setSnackbar((s) => ({ ...s, open: false }));
  };

  return (
    <Box sx={{ height: DATAGRID_HEIGHT }}>
      <DataGrid
        rows={data?.rows || []}
        rowCount={rowCount}
        columns={columns}
        getRowId={(row) => row.id}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: paginationModel,
          },
        }}
        loading={isLoading}
        slotProps={{
          loadingOverlay: {
            variant: "skeleton",
          },
        }}
        pageSizeOptions={DATAGRID_PAGE_SIZE_OPTIONS}
        paginationMode="server" // Enable server-side pagination
        paginationModel={paginationModel}
        onPaginationModelChange={(newPaginationModel) => {
          setPaginationModel(newPaginationModel); // Update the page and page size when pagination changes
        }}
        sx={{
          // Styling for the column headers
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: APP_THEME_COLOR,
            color: "white",
            fontWeight: 600,
          },
          // Styling for the footer pagination
          "& .MuiTablePagination-root": {
            color: APP_THEME_COLOR,
          },
        }}
      />
      <SnackbarNotifier
        open={snackbar.open}
        message={snackbar.message}
        onClose={handleCloseSnackbar}
      />
    </Box>
  );
};

// Memoized the component to prevent unnecessary re-renders
const CustomDataGrid = React.memo(CustomDataGridComponent);

export default CustomDataGrid;
