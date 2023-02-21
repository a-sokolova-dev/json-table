import { TableCellProps } from "./TableCell.types";

export const TableCell: React.FC<TableCellProps> = (props) => {
  const { value } = props;
  return (
    <td className='cell' {...props}>
      {value}
    </td>
  );
};
