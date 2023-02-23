import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import "./App.css";
import { Table } from "./components";
import { TableRecord } from "./components/TableRow/TableRow.types";
import useDebounce from "./hooks/useDebounce";
import { parseDataFromString } from "./utils/parseJson";

const initialData = [
  {
    name: "name1",
    value: "value1",
    id: nanoid(),
  },
  {
    name: "name2",
    value: "click to edit!",
    id: nanoid(),
  },
];

function App() {
  const [data, setData] = useState<TableRecord[]>(initialData);
  const [textareaValue, setTextareaValue] = useState<string>(
    JSON.stringify(initialData, ["name", "value"])
  );

  const debouncedTextareaValue = useDebounce<string>(textareaValue, 500);

  const handleDataUpdate = (values: TableRecord[]) => {
    setData(values);
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(e.target.value);
  };

  const handleTableSave = () => {
    setTextareaValue(JSON.stringify(data, ["name", "value"]));
  };

  useEffect(() => {
    const data = parseDataFromString(debouncedTextareaValue);
    if (!data) return;

    const tableRecords = data.map((item) => ({
      ...item,
      id: nanoid(),
    }));

    handleDataUpdate(tableRecords);
  }, [debouncedTextareaValue]);

  return (
    <div className='container'>
      <h1>JSON Table</h1>
      <div className='table-container'>
        <Table rows={data} onRowsUpdated={handleDataUpdate} />
      </div>
      <div className='actions-container'>
        <button className='btn btn-accent' onClick={handleTableSave}>
          Save as JSON
        </button>
      </div>
      <textarea
        rows={6}
        value={textareaValue}
        onChange={handleTextAreaChange}
      />
    </div>
  );
}

export default App;
