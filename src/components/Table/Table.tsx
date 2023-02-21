import { TableHead, TableRow } from "../";
import { TableProps } from "./Table.types";

export const Table: React.FC<TableProps> = (props) => {
  const { rows } = props;
  return (
    <table className='table'>
      <TableHead />
      <tbody>
        {rows.map((r) => (
          <TableRow record={r} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
