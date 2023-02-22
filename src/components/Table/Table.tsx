import { useState } from "react";
import { TableHead, TableRow } from "../";
import { TableRowSchema } from "../TableRow/TableRow.types";
import { TableProps } from "./Table.types";
import { nanoid } from "nanoid";

export const Table: React.FC<TableProps> = (props) => {
  const { data, onRowsUpdated } = props;

  const [rows, setRows] = useState<TableRowSchema[]>(data);

  const handleAddRow = () => {
    const newRow: TableRowSchema = {
      name: "new name",
      value: "new value",
      id: nanoid(),
    };

    setRows([...rows, newRow]);
    onRowsUpdated && onRowsUpdated([...rows, newRow]);
  };

  const handleDeleteRow = (index: number) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
    onRowsUpdated && onRowsUpdated(updatedRows);
  };

  const handleChangeRow = (row: TableRowSchema, index: number) => {
    const updatedRows = [...rows.map((r, i) => (i === index ? row : r))];
    setRows(updatedRows);
    onRowsUpdated && onRowsUpdated(updatedRows);
  };

  return (
    <table className='table'>
      <TableHead onRowAdd={handleAddRow} />
      <tbody>
        {rows.map((r, index) => (
          <TableRow
            key={`${r.name}-${r.id}`}
            record={r}
            onRowRecordChange={(row) => handleChangeRow(row, index)}
            onRowDelete={() => handleDeleteRow(index)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
