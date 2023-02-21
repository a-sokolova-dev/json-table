import { TableHTMLAttributes } from "react";

export interface TableHeadProps extends TableHTMLAttributes<HTMLTableRowElement> {
    onRowAdd?: () => void
}