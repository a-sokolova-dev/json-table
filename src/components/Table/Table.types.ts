import { TableRowSchema } from "../TableRow/TableRow.types";

export interface TableProps {
    id?: string;

    data: TableRowSchema[];
    loading?: boolean;

    onRowsUpdated?: (rowData: TableRowSchema[]) => void
}