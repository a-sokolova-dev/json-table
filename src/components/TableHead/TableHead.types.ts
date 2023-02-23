import { TableHTMLAttributes } from "react";

export interface TableHeadProps extends TableHTMLAttributes<HTMLTableSectionElement> {
    /**
    * Callback function that is fired when the Add row butten was clicked.
    *
    */
    onRowAdd?: () => void
}