
import React, { useState } from "react";
import { employeeData, compare, compareTitle, compareSalary } from "./components/Data/employeeData"
import { Table, TableRow } from './components/Table/index';
import { Container, Row, Col } from "./components/Grid/index";
import Form from "./components/Form";
import Button from "./components/Button";

function App() {

  const [employees, setEmployees] = useState([...employeeData]);

  const handleOnClick = event => {

    event.preventDefault();
    var id = event.target.id;
    switch(id){
      case "by-name":
        setEmployees([...employees.sort(compare('lastName'))]);
        break;
      case "by-title":
        setEmployees([...employees.sort(compare('title'))]);
        console.log([...employees.sort(compare('title'))]);
        break;
      case "by-salary":
        setEmployees([...employees.sort(compare('salary'))]);
        console.log([...employees.sort(compare('salary'))]);
        break;
      case "filter":
        let minimum = document.getElementById("FormControl");
        let filtered = [...employees.filter((emp) => {return emp.salary >= minimum.value})];
        setEmployees(filtered);
        console.log(filtered);
      case "restore":
        setEmployees([...employeeData]);
        break;
    }
  }

  return (
    <Container>
      <h1 class="text-center mt-5 mb-5"> Employee Directory </h1>
      <Row>
        <Col size="md-12">
          <Table> {employees.map((emp) => { return <TableRow employee={emp} />; })}  </Table>
        </Col>
      </Row>
      <Row>
        <Col size="md">
        <Button
            onClick={handleOnClick}
            type="success"
            className="input-lg"
            id="by-name">Sort by Name</Button>
        </Col>
        <Col size="md">
        <Button
            onClick={handleOnClick}
            type="success"
            className="input-lg"
            id="by-title"> Sort by Title</Button>
        </Col>
        <Col size="md">
        <Button
            onClick={handleOnClick}
            type="success"
            className="input-lg"
            id="by-salary"> Sort by Salary</Button>
        </Col>
        <Col size="md">
        <Button
            onClick={handleOnClick}
            type="success"
            className="input-lg"
            id="restore">Restore List</Button>
        </Col>
      </Row>
      <Row>
        <Col size="md-3">
          <Form
          onClick={handleOnClick}
          type="success"
          className="input-lg"
          id="filter"></Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
