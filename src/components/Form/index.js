import React from "react";
import Button from "../Button";


export function Form({ type = "default", className, children, onClick, id }) {


    return (
        <form>
            <div class="form-group mt-5">
                <label for="FilterBySalary">Enter Minimum Salary</label>
                <input type="number" class="form-control" id="FormControl"/>
            </div>
            <Button
            onClick={onClick}
            type={type}
            className={className}
            id={id}>Filter</Button>
        </form>
    ); 
}

export default Form;