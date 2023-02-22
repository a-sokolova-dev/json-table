import { TableHTMLAttributes } from "react";

export interface TableHeadProps extends TableHTMLAttributes<HTMLTableSectionElement> {
    onRowAdd?: () => void
}