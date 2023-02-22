import { TableHTMLAttributes } from "react";

export interface TableRowProps extends TableHTMLAttributes<HTMLTableRowElement> {
    record: TableRowSchema
    onRowRecordChange?: (record: TableRowSchema) => void
    onRowDelete?: () => void
}
export interface TableRowSchema {
    id: string;
    name: string
    value: string
}