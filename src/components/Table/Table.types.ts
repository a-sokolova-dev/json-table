import { TableHTMLAttributes } from "react";
import { TableRecord } from "../TableRow/TableRow.types";


export interface TableProps extends TableHTMLAttributes< HTMLTableElement > {
    /**
    * The table's rows
    */
    rows: TableRecord[];
    /**
    * Callback function that is fired when the table's rows changed.
    *
    * @param {TableRecord[]} rows The updated rows.
    */
    onRowsUpdated?: (rows: TableRecord[]) => void
}