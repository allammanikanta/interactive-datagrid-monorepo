/**
 *
 * Cell Renderer Registry for DataGrid
 * Responsible for managing the registration and retrieval of cell renderers
 *
 */
import { CellRenderer } from "../../types/dataGridTypes";

const registry = new Map<string, CellRenderer>();

export const CellRendererRegistry = {
  register: (type: string, renderer: CellRenderer) => {
    registry.set(type, renderer);
  },
  getRenderer: (type: string): CellRenderer | undefined => {
    return registry.get(type);
  },
};
