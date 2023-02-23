import { useEffect, useState } from "react";
import { TableHead, TableRow } from "../";
import { TableRecord } from "../TableRow/TableRow.types";
import { TableProps } from "./Table.types";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { nanoid } from "nanoid";

export const Table: React.FC<TableProps> = ({ rows, onRowsUpdated }) => {
  const [displayedRows, setDisplayedRows] = useState<TableRecord[]>([]);

  const handleAddRow = () => {
    const newRow: TableRecord = {
      name: "new name",
      value: "new value",
      id: nanoid(),
    };

    setDisplayedRows([...displayedRows, newRow]);
    onRowsUpdated && onRowsUpdated([...displayedRows, newRow]);
  };

  const handleDeleteRow = (id: string) => {
    const updatedRows = rows.filter((r) => r.id !== id);
    setDisplayedRows(updatedRows);
    onRowsUpdated && onRowsUpdated(updatedRows);
  };

  const handleChangeRow = (row: TableRecord) => {
    const updatedRows = [
      ...displayedRows.map((r) => (r.id === row.id ? row : r)),
    ];
    setDisplayedRows(updatedRows);
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
    setDisplayedRows(reorderedRows);
    onRowsUpdated && onRowsUpdated(reorderedRows);
  };

  const reorder = (
    list: TableRecord[],
    startIndex: number,
    endIndex: number
  ) => {
    const [removed] = list.splice(startIndex, 1);
    list.splice(endIndex, 0, removed);
    return list;
  };

  useEffect(() => {
    setDisplayedRows(rows);
  }, [rows]);

  return (
    <table className='table'>
      <TableHead onRowAdd={handleAddRow} />
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='tbody'>
          {(provided) => (
            <tbody ref={provided.innerRef} {...provided.droppableProps}>
              {displayedRows.map((r, index) => (
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
