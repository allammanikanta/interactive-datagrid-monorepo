import { CellEditor } from '../../types/dataGridTypes';
import { UserMultiSelectCellEditor } from '../Cells/UserMultiSelectCellEditor';
import { CellEditorRegistry } from './CellEditorRegistry';

export const setupCellEditors = () => {
  CellEditorRegistry.register(
    "user-multiselect",
    UserMultiSelectCellEditor as CellEditor
  );
};
