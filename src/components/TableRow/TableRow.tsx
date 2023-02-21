import { TableCell } from "../TableCell";
import { TableRowProps } from "./TableRow.types";

export const TableRow: React.FC<TableRowProps> = (props) => {
  const { record } = props;

  return (
    <tr>
      <TableCell value={record.name} />
      <TableCell value={record.value} />
      <TableCell value={"Delete"} />
    </tr>
  );
};

export default TableRow;
