import { CellEditor } from "../../types/dataGridTypes";

const editorRegistry = new Map<string, CellEditor>();

export const CellEditorRegistry = {
  register: (type: string, editor: CellEditor) => {
    editorRegistry.set(type, editor);
  },
  getEditor: (type: string): CellEditor | undefined => {
    const editor = editorRegistry.get(type);
    return editor;
  },
};
