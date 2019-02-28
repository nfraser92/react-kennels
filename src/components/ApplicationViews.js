import { Route } from "react-router-dom";
import React, { Component } from "react";
import AnimalList from "./animal/AnimalList";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";

class ApplicationViews extends Component {

  state = {
    employees: [],
    locations: [],
    animals: [],
    animalOwners: [],
    owners: []
  }

  deleteAnimal = (id) => {
     fetch(`http://localhost:5002/animals/${id}`, {
        method: "DELETE"
    })
    .then(() => fetch(`http://localhost:5002/animals`))
    .then(r => r.json())
    .then(animals => this.setState({ animals: animals })
  )
}

  deleteOwners = (id) => {
     fetch(`http://localhost:5002/Owners/${id}`, {
        method: "DELETE"
    })
    .then(() => fetch(`http://localhost:5002/Owners`))
    .then(r => r.json())
    .then(owners => this.setState({ owners: owners })
  )
}

fireEmployee = (id) => {
  fetch(`http://localhost:5002/employees/${id}`, {
      "method": "DELETE"
  })
  .then(() => fetch("http://localhost:5002/employees"))
  .then(r => r.json())
  .then(employees => this.setState({ employees: employees }))
}

  componentDidMount() {
    const newState = {}

    fetch("http://localhost:5002/animals")
        .then(r => r.json())
        .then(animals => newState.animals = animals)
        .then(() => fetch("http://localhost:5002/employees")
        .then(r => r.json()))
        .then(employees => newState.employees = employees)
        .then(() => fetch("http://localhost:5002/Locations")
        .then(r => r.json()))
        .then(locations => newState.locations = locations)
        .then(() => fetch("http://localhost:5002/animalOwners")
        .then(r => r.json()))
        .then(animalOwners => newState.animalOwners = animalOwners)
        .then(() => fetch("http://localhost:5002/Owners")
        .then(r => r.json()))
        .then(owners => newState.owners = owners)
        .then(() => this.setState(newState))

    }

  render() {
    return (
        <React.Fragment>
            <Route exact path="/" render={(props) => {
                return <LocationList locations={this.state.locations} />
            }} />
            <Route path="/animals" render={(props) => {
                return <AnimalList animals={this.state.animals}
                animalOwners={this.state.animalOwners}
                owners={this.state.owners}
                deleteAnimal={this.deleteAnimal}
                />
            }} />
            <Route path="/employees" render={(props) => {
              return <EmployeeList fireEmployee={this.fireEmployee}
              employees={this.state.employees}
              />
            }} />
            <Route path="/owners" render={(props) => {
                return <OwnerList deleteOwners={this.deleteOwners}
                                  owners={this.state.owners}
                                   />
            }} />
        </React.Fragment>
    )
}
}

export default ApplicationViews;
