import { TableHTMLAttributes } from "react";

export interface TableRowProps extends TableHTMLAttributes<HTMLTableRowElement> {
    /**
   * The record content of the row.
   */
    record: TableRecord
    /**
    * Callback function that is fired when the record changed.
    *
    * @param {TableRecord} record The new record.
    */
    onRowRecordChange?: (record: TableRecord) => void
    /**
    * Callback function that is fired when the record was deleted.
    */
    onRowDelete?: () => void
}
export interface TableRecord {
    /**
    * Unique record id generated with nanoid
    */
    id: string;
    /**
    * The record's name field
    */
    name: string
    /**
    * The record's value field
    */
    value: string
}