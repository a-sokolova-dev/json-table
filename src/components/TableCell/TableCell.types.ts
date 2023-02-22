import { TableHTMLAttributes } from "react";

export interface TableCellProps extends TableHTMLAttributes<HTMLTableCellElement> {
    value?: string
    renderComponent?: React.ReactNode;

    onValueChange?: (value: string) => void
}