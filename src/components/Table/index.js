import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export function Table({ children }) {
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Title</th>
                    <th scope="col">Salary</th>
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
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