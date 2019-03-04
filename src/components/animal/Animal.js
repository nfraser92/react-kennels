import React, { Component } from 'react'
import dog from "./DogIcon.png"
import './AnimalList.css'
import { Link } from "react-router-dom";


class Animal extends Component {
    componentDidMount() {

    }

    render() {


        return (
            <div key={this.props.animal.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        <img src={dog} className="icon--dog" alt="dog--icon"/>
                        <div>{this.props.animal.name}</div>
                        <div className="OwnerList">Owner(s):</div>
                        <div>({this.props.owners.join(", ")})</div>
                        <Link className="nav-link" to={`/animals/${this.props.animal.id}`}>Details</Link>
                        <button
                            onClick={() => this.props.deleteAnimal(this.props.animal.id)}
                            className="card-link">Discharge Animal</button>
                    </h5>
                </div>
            </div>
        )
    }
}

export default Animal