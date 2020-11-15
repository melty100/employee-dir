
import {employeeData} from "./components/Data/employeeData"
import {Table, TableRow} from './components/Table/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Table> {employeeData.map((emp) => {return <TableRow employee={emp}/>;})}  </Table>
      </header>
    </div>
  );
}

export default App;
