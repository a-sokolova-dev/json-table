import { useEffect, useState } from "react";
import { TableHead, TableRow } from "../";
import { TableRowSchema } from "../TableRow/TableRow.types";
import { TableProps } from "./Table.types";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
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

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const reorderedRows = reorder(
      rows,
      result.source.index,
      result.destination.index
    );
    setRows(reorderedRows);
    onRowsUpdated && onRowsUpdated(reorderedRows);
  };

  const reorder = (
    list: TableRowSchema[],
    startIndex: number,
    endIndex: number
  ) => {
    const [removed] = list.splice(startIndex, 1);
    list.splice(endIndex, 0, removed);
    return list;
  };

  useEffect(() => {
    setRows(data);
  }, [data]);

  return (
    <table className='table'>
      <TableHead onRowAdd={handleAddRow} />
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='tbody'>
          {(provided) => (
            <tbody ref={provided.innerRef} {...provided.droppableProps}>
              {rows.map((r, index) => (
                <Draggable
                  draggableId={`${r.name}-${r.id}`}
                  key={`${r.name}-${r.id}`}
                  index={index}
                >
                  {(provided) => {
                    return (
                      <TableRow
                        record={r}
                        onRowRecordChange={(row) => handleChangeRow(row)}
                        onRowDelete={() => handleDeleteRow(r.id)}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      />
                    );
                  }}
                </Draggable>
              ))}
            </tbody>
          )}
        </Droppable>
      </DragDropContext>
    </table>
  );
};

export default Table;
