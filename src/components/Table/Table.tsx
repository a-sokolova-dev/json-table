import { useEffect, useState } from "react";
import { TableHead, TableRow } from "../";
import { TableRowSchema } from "../TableRow/TableRow.types";
import { TableProps } from "./Table.types";
import { nanoid } from "nanoid";

export const Table: React.FC<TableProps> = ({ data, onRowsUpdated }) => {
  const [rows, setRows] = useState<TableRowSchema[]>([]);

  const handleAddRow = () => {
    const newRow: TableRowSchema = {
      name: "new name",
      value: "new value",
      id: nanoid(),
    };

    setRows([...rows, newRow]);
    onRowsUpdated && onRowsUpdated([...rows, newRow]);
  };

  const handleDeleteRow = (id: string) => {
    const updatedRows = rows.filter((r) => r.id !== id);
    setRows(updatedRows);
    onRowsUpdated && onRowsUpdated(updatedRows);
  };

  const handleChangeRow = (row: TableRowSchema) => {
    const updatedRows = [...rows.map((r) => (r.id === row.id ? row : r))];
    setRows(updatedRows);
    onRowsUpdated && onRowsUpdated(updatedRows);
  };

  useEffect(() => {
    setRows(data);
  }, [data]);

  return (
    <table className='table'>
      <TableHead onRowAdd={handleAddRow} />
      <tbody>
        {rows.map((r) => (
          <TableRow
            key={`${r.name}-${r.id}`}
            record={r}
            onRowRecordChange={(row) => handleChangeRow(row)}
            onRowDelete={() => handleDeleteRow(r.id)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
