/**
 * CellRendererRegistry is a centralized registry for all cell renderers used in the data grid.
 * Which allows easy registration and retrieval of cell renderers by their type.
 *
 */
import { CellRenderer } from "../../types/dataGridTypes";
import { LinkCellRenderer } from "../Cells/LinkCellRenderer";
import { NumberCellRenderer } from "../Cells/NumberCellRenderer";
import { TagCellRenderer } from "../Cells/TagCellRenderer";
import { TextCellRenderer } from "../Cells/TextCellRenderer";
import { UserMultiSelectCellRenderer } from "../Cells/UserMultiSelectCellRenderer";
import { CellRendererRegistry } from "./CellRendererRegistry";

// Centralized registration of all cell renderers
export const setupCellRenderers = () => {
  CellRendererRegistry.register("text", TextCellRenderer as CellRenderer);
  CellRendererRegistry.register("number", NumberCellRenderer as CellRenderer);
  CellRendererRegistry.register("link", LinkCellRenderer as CellRenderer);
  CellRendererRegistry.register("tag", TagCellRenderer as CellRenderer);
  CellRendererRegistry.register(
    "user-multiselect",
    UserMultiSelectCellRenderer as CellRenderer
  );
};
