import { useState } from "react";
import { TableHead, TableRow } from "../";
import { TableRowSchema } from "../TableRow/TableRow.types";
import { TableProps } from "./Table.types";

export const Table: React.FC<TableProps> = (props) => {
  const { data } = props;
  const [rows, setRows] = useState<TableRowSchema[]>(data);

  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        name: "new name",
        value: "new value",
      },
    ]);
  };

  const handleDeleteRow = (index: number) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  return (
    <table className='table'>
      <TableHead onRowAdd={handleAddRow} />
      <tbody>
        {rows.map((r, index) => (
          <TableRow
            key={index}
            record={r}
            onRowRecordChange={() => {}}
            onRowDelete={() => handleDeleteRow(index)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
