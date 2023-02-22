import { useState } from "react";
import { TableCell } from "../TableCell";
import { TableRowProps, TableRowSchema } from "./TableRow.types";

export const TableRow: React.FC<TableRowProps> = (props) => {
  const { record, onRowRecordChange, onRowDelete } = props;
  const [rowRecord, setRowRecord] = useState<TableRowSchema>(record);

  const handleRowUpdate = (field: keyof TableRowSchema, value: string) => {
    setRowRecord({ ...rowRecord, [field]: value });
    onRowRecordChange && onRowRecordChange({ ...rowRecord, [field]: value });
  };

  const handleRowDelete = () => onRowDelete && onRowDelete();

  return (
    <tr>
      <TableCell
        value={rowRecord.name}
        onValueChange={(name) => {
          handleRowUpdate("name", name);
        }}
      />
      <TableCell
        value={rowRecord.value}
        onValueChange={(value) => {
          handleRowUpdate("value", value);
        }}
      />
      <TableCell
        renderComponent={<button className='btn' onClick={handleRowDelete}>delete</button>}
      />
    </tr>
  );
};

export default TableRow;
