import React from "react";
import { Container, Row, Col } from "../Grid";
import 'bootstrap/dist/css/bootstrap.min.css';


export function Table({children}) {
    return (
        <Container>
            <h1 class="text-center mt-5 mb-5"> Employee Directory </h1>
            <Row>
                <Col size="md-12">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">title</th>
                                <th scope="col">Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {children}
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    );
}

export function TableRow({ employee: { firstName, lastName, title, salary } }) {
    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{title}</td>
            <td>{salary}</td>
        </tr>
    );
}