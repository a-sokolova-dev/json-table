import { TableRowSchema } from "../TableRow/TableRow.types";

export interface TableProps {
    id?: string;

    data: TableRowSchema[];
    loading?: boolean;

    // empty?: JSXELement
    // loadingElement?: JSXElement

    // onRowOrderChange?: (e: OrderChangeEvent) => void
    onRowsUpdated?: (rowData: TableRowSchema[]) => void
}