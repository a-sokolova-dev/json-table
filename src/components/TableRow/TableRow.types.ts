export interface TableRowProps {
    record: TableRowSchema
    onRowRecordChange?: (record: TableRowSchema) => void
    onRowDelete?: () => void
}
export interface TableRowSchema {
    name: string
    value: string
}