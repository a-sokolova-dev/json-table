export interface TableRowProps {
    record: TableRowSchema
    onRowRecordChange?: (record: TableRowSchema) => void
    onRowDelete?: () => void
}
export interface TableRowSchema {
    id: string;
    name: string
    value: string
}