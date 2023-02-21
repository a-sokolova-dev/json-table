import "./App.css";
import { Table } from "./components";

function App() {
  const mockData = [
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
        <Table data={mockData} />
      </div>
    </div>
  );
}

export default App;
