import React, { Component } from 'react'
import "./Employee.css"


class EmployeeList extends Component {

    componentDidMount() {

    }
    render() {
    return (
            <section className="employees">
            <h1>Employees</h1>
            <div className="employeeButton">
            <button type="button"
                    className="employee-button"
                    onClick={() => {
                        this.props.history.push("/employees/new")
                    }}> Add New Employee
                    </button>
            </div>
            {
                this.props.employees.map(employee =>
                    <div key={employee.id}>
                        {employee.name}
                        <button className="fireButton" onClick={() => {
                                this.props.fireEmployee(employee.id)
                            }}
                        >Fire</button>
                    </div>
                )
            }
            </section>
        )
    }
}

export default EmployeeList