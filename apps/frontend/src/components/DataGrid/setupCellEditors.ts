/**
 *
 * This is a centralized place to manage cell editor registration.
 * Which allows easy addition and removal of cell editors.
 * The setupCellEditors function is called to register all cell editors.
 */
import { CellEditor } from "../../types/dataGridTypes";
import NumberCellEditor from "../Cells/NumberCellEditor";
import TextCellEditor from "../Cells/TextCellEditor";
import { UserMultiSelectCellEditor } from "../Cells/UserMultiSelectCellEditor";
import { CellEditorRegistry } from "./CellEditorRegistry";

export const setupCellEditors = () => {
  CellEditorRegistry.register(
    "user-multiselect",
    UserMultiSelectCellEditor as CellEditor
  );
  CellEditorRegistry.register("number", NumberCellEditor as CellEditor);
  CellEditorRegistry.register("text", TextCellEditor as CellEditor);
};
