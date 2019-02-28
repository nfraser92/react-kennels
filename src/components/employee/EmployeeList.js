import React, { Component } from 'react'


class EmployeeList extends Component {

    componentDidMount() {

    }
    render() {
    return (
            <section className="employees">
            <h1>Employees</h1>
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