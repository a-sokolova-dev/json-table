import { TableHeadProps } from "./TableHead.types";

export const TableHead: React.FC<TableHeadProps> = (props) => {
  const { onRowAdd } = props;
  const handleAddRow = () => onRowAdd && onRowAdd();

  return (
    <thead {...props}>
      <tr className='tr'>
        <th className='thead-cell thead-cell-height thead-background'>Keys</th>
        <th className='thead-cell thead-cell-height thead-background'>
          Values
        </th>
        <th className='thead-cell thead-cell-icon thead-cell-height thead-background'>
          <button className='btn' onClick={handleAddRow}>
            Add
          </button>
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
