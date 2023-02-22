import { nanoid } from "nanoid";
import { useState } from "react";
import "./App.css";
import { Table } from "./components";
import { TableRowSchema } from "./components/TableRow/TableRow.types";

const initialData = [
  {
    name: "name1",
    value: "value1",
    id: nanoid(),
  },
  {
    name: "name2",
    value: "value2",
    id: nanoid(),
  },
];

function App() {
  const [data, setData] = useState<typeof initialData>(initialData);
  const [textAreaData, setTextAreaData] = useState<string>(
    JSON.stringify(initialData, ["name", "value"])
  );

  const handleDataUpdate = (values: TableRowSchema[]) => {
    setData(values);
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setTextAreaData(text);
  };

  const handleTableSave = () => {
    setTextAreaData(JSON.stringify(data, ["name", "value"]));
  };

  return (
    <div className='container'>
      <h1>JSON Table</h1>
      <div className='table-container'>
        <Table data={data} onRowsUpdated={handleDataUpdate} />
      </div>
      <div className='actions-container'>
        <button className='btn btn-accent' onClick={handleTableSave}>
          Save as JSON
        </button>
      </div>
      <textarea rows={6} value={textAreaData} onChange={handleTextAreaChange} />
    </div>
  );
}

export default App;
