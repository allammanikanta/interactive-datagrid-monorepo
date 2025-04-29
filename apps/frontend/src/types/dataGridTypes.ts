export interface ColumnDefinition {
  field: string;
  headerName: string;
  type: string; // e.g., 'text', 'number', 'link', 'user-multiselect'
}

export interface CellRendererProps<T = unknown> {
  value: T;
  rowData: Record<string, unknown>;
  column: ColumnDefinition;
}

export type CellRenderer = (props: CellRendererProps) => React.ReactNode;

export interface CellEditorProps<T = unknown> {
  value: T;
  rowData: Record<string, unknown>;
  column: ColumnDefinition;
  onChange: (newValue: T) => void;
}

export type CellEditor = (props: CellEditorProps) => React.ReactNode;

export interface CellEditorProps<T = unknown> {
  value: T;
  rowData: Record<string, unknown>;
  column: ColumnDefinition;
  onChange: (newValue: T) => void;
}
