import { TableRowSchema } from "../TableRow/TableRow.types";

export interface TableProps {
    id?: string;

    rows: TableRowSchema[];
    loading?: boolean;
    
    // empty?: JSXELement
    // loadingElement?: JSXElement

    // onRowOrderChange?: (e: OrderChangeEvent) => void
}