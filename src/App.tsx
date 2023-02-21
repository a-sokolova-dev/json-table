import "./App.css";
import { Table } from "./components";

function App() {
  const mockRows = [
    {
      name: "name1",
      value: "value1",
    },
    {
      name: "name2",
      value: "value2",
    },
  ];
  return (
    <div className='App'>
      <h1>JSON Table</h1>
      <div className='container'>
        <Table rows={mockRows} />
      </div>
    </div>
  );
}

export default App;
