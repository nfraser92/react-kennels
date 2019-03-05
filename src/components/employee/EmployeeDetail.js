import React, { Component } from 'react'
import generic from "./person.png"
import './Employee.css'
import { Link } from "react-router-dom";


class EmployeeDetail extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div key={this.props.employee.id} className="card">
                <div className="pet-card-body">
                    <h5 className="card-title">
                        <img src={generic} className="icon--employee" alt="employee--icon"/>
                        <div>{this.props.employee.name}</div>
                        <Link className="nav-link" to={`/employee/${this.props.employee.id}`}>Details</Link>
                        <button
                            onClick={() => this.props.deleteEmployee(this.props.employee.id)}
                            className="card-link">Fire</button>
                    </h5>
                </div>
            </div>
        )
    }
}

export default EmployeeDetail