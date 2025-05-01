import { ColumnDefinition } from "../types/dataGridTypes";

export const BaseUrl = import.meta.env.VITE_APP_BACKEND_URL;

export const columns: ColumnDefinition[] = [
  {
    field: "id",
    headerName: "ID",
    type: "link",
  },
  {
    field: "task",
    headerName: "Task Name",
    type: "text",
  },
  {
    field: "summary",
    headerName: "Summary",
    type: "text",
  },
  {
    field: "plasmid",
    headerName: "Plasmid Tag",
    type: "tag",
  },
  {
    field: "volume",
    headerName: "Volume (ml)",
    type: "number",
  },
  {
    field: "assignee",
    headerName: "Assignees",
    type: "user-multiselect",
  },
];

export const PRIMARY_COLOR = "#343c6a";
export const APP_THEME_COLOR = "#816EC7";
export const HEADER = "Interactive Data Grid";
export const FOOTER_MESSAGE = "*Please double click on assignees to edit";

// Datagrid Constants
export const DATAGRID_HEIGHT = 450;
export const DATAGRID_PAGE_SIZE_OPTIONS = [5, 10, 20];
export const DATAGRID_PAGE_SIZE = 5;
export const DATAGRID_DEAULT_PAGE_NUM = 0;
export const DATAGRID_CHIP_COLOR = "#E5989B";
export const DATAGRID_MIN_WIDTH = 200;
export const ERROR_LOADING_USERS = "Error loading users.";
