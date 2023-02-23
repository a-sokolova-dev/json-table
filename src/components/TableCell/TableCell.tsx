import { useState } from "react";
import { TableCellProps } from "./TableCell.types";

export const TableCell: React.FC<TableCellProps> = (props) => {
  const { value, onValueChange, component, placeholder = "empty" } = props;
  const [inputValue, setInputValue] = useState<string>(value ?? "");
  const [isEditing, setEditing] = useState<boolean>(false);

  const handleSaveValue = () => {
    onValueChange && onValueChange(inputValue);
    setEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const toggleEditMode = () => setEditing(!isEditing);

  return (
    <td className='cell'>
      {!component ? (
        <>
          {isEditing ? (
            <div className='cell-edit-wrapper'>
              <input type='text' value={inputValue} onChange={handleChange} />
              <button className='btn' onClick={handleSaveValue}>
                Ok
              </button>
              <button className='btn' onClick={toggleEditMode}>
                Cancel
              </button>
            </div>
          ) : (
            <div
              onClick={toggleEditMode}
              className={value ? "" : "text-cursive"}
            >
              {value || placeholder}
            </div>
          )}
        </>
      ) : (
        <>{component}</>
      )}
    </td>
  );
};
