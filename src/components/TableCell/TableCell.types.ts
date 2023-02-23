import { TableHTMLAttributes } from "react";

export interface TableCellProps extends TableHTMLAttributes<HTMLTableCellElement> {
    /**
   * The string content of the cell.
   */
    value?: string
    /**
   * The component rendered inside the <td>.
   */
    component?: React.ReactNode;
    /**
    * Callback function that is fired when the cell's content changed.
    *
    * @param {string} value The new value.
    */
    onValueChange?: (value: string) => void
}