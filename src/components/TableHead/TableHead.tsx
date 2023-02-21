export const TableHead: React.FC = () => {
  return (
    <thead>
      <tr className='tr'>
        <th className='thead-cell thead-cell-height thead-background'>Keys</th>
        <th className='thead-cell thead-cell-height thead-background'>
          Values
        </th>
        <th className='thead-cell thead-cell-icon thead-cell-height thead-background'>
          Add
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
