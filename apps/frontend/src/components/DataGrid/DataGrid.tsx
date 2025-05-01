import { Box } from "@mui/material";
import {
  DataGrid,
  GridRenderCellParams,
  GridRenderEditCellParams,
} from "@mui/x-data-grid";
import React, { useMemo, useState } from "react";

import { usePaginatedTasks } from "../../hooks/useTasks";
import {
  APP_THEME_COLOR,
  columns as columnDefs,
  DATAGRID_DEAULT_PAGE_NUM,
  DATAGRID_HEIGHT,
  DATAGRID_MIN_WIDTH,
  DATAGRID_PAGE_SIZE,
  DATAGRID_PAGE_SIZE_OPTIONS,
} from "../../utils/constants";
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
            fontSize: 14,
            borderBottom: `2px solid ${APP_THEME_COLOR}`,
          },
          // Styling for pagination controls
          "& .MuiPaginationItem-root": {
            color: APP_THEME_COLOR,
          },
          // Styling for the footer pagination
          "& .MuiTablePagination-root": {
            color: APP_THEME_COLOR,
          },
        }}
      />
    </Box>
  );
};

// Memoized the component to prevent unnecessary re-renders
const CustomDataGrid = React.memo(CustomDataGridComponent);

export default CustomDataGrid;
