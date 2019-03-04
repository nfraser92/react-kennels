import { Route, Redirect } from "react-router-dom"
import React, { Component } from "react";
import AnimalList from "./animal/AnimalList";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import AnimalManager from "../modules/AnimalManager"
import EmployeeManager from "../modules/EmployeeManager"
import OwnerManager from "../modules/OwnerManager"
import LocationManager from "../modules/LocationManager"
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from "./animal/AnimalForm";
import EmployeeForm from "./employee/EmployeeForm";
import LocationForm from "./location/LocationForm";
import OwnerForm from "./owner/OwnerForm";
import Login from "./authentication/Login"


class ApplicationViews extends Component {

    // Check if credentials are in local storage
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null


  state = {
    employees: [],
    locations: [],
    animals: [],
    animalOwners: [],
    owners: []
  }

  deleteAnimal = (id) => {
    return AnimalManager.deleteAnimal(id)
    .then(animals => this.setState({
        animals: animals
      })
    )
  }

  fireEmployee = (id) => {
    return EmployeeManager.fireEmployee(id)
    .then(employees => this.setState({
        employees: employees
      })
    )
  }

  deleteOwner = (id) => {
    return OwnerManager.deleteOwner(id)
    .then(owners => this.setState({
        owners: owners
      })
    )
  }


  addAnimal = animal =>
  // returning promise
    AnimalManager.addAnimal(animal)
      .then(() => AnimalManager.getAll())
      .then(animals =>
        this.setState({
          animals: animals
        })
      )

  getAllAnimalsAgain = () =>
  AnimalManager.getAll().then(animals => this.setState({animals: animals}))

  addEmployee = employee =>
  // returning promise
    EmployeeManager.addEmployee(employee)
      .then(() => EmployeeManager.getAll())
      .then(employees =>
        this.setState({
          employees: employees
        })
      )

  addLocation = location =>
  LocationManager.addLocation(location)
  .then(() => LocationManager.getAll())
  .then(locations =>
        this.setState({
          locations: locations
        })
        )

  addOwner = owner =>
  OwnerManager.addOwner(owner)
  .then(() => OwnerManager.getAll())
  .then(owners =>
    this.setState({
      owners: owners
    }))




  componentDidMount() {
    const newState = {}

    AnimalManager.getAll()
    .then(animals => newState.animals = animals)
    EmployeeManager.getAll()
      .then(employees => newState.employees = employees)
    LocationManager.getAll()
      .then(locations => newState.locations = locations)
      OwnerManager.getAll()
        .then(owners => newState.owners = owners)
      .then(() => fetch("http://localhost:5002/animalOwners")
        .then(r => r.json()))
      .then(animalOwners => newState.animalOwners = animalOwners)
      .then(() => this.setState(newState))

  }

  render() {
    return (
        <React.Fragment>
          <Route exact path="/login" component={Login} />

        <Route exact path="/" render={(props) => {
          if (this.isAuthenticated()) {
            return <LocationList locations={this.state.locations}
                                 {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/locations" render={(props) => {
          if (this.isAuthenticated()) {
            return <LocationList locations={this.state.locations}
                                 {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

            <Route exact path="/locations/new" render={(props) => {
                return <LocationForm locations={this.state.locations}
                                     addLocation={this.addLocation}
                                     {...props}
                                    />
            }} />

            <Route exact path="/animals" render={(props) => {
              if (this.isAuthenticated()) {
                return <AnimalList animals={this.state.animals}
                                   animalOwners={this.state.animalOwners}
                                   owners={this.state.owners}
                                   deleteAnimal={this.deleteAnimal}
                                   {...props} />
              } else {
                return <Redirect to="/login" />
              }
            }} />

            <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                return <AnimalDetail     {...props}
                                         deleteAnimal={this.deleteAnimal}
                                         animals={this.state.animals} />
            }} />

            <Route exact path="/animals/new" render={(props) => {
                return <AnimalForm {...props}
                                   addAnimal={this.addAnimal}
                                   employees={this.state.employees} />
            }} />

            <Route exact path="/employees" render={props => {
                if (this.isAuthenticated()) {
                    return <EmployeeList deleteEmployee={this.deleteEmployee}
                                         employees={this.state.employees} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />

              <Route exact path="/employees/new" render={(props) => {
                return <EmployeeForm {...props}
                                   addEmployee={this.addEmployee}
                                   employees={this.state.employees} />

            }} />
            <Route exact path="/owners" render={(props) => {
                if (this.isAuthenticated()) {
                return <OwnerList deleteOwner={this.deleteOwner}
                                  owners={this.state.owners}
                                  {...props} />
                } else {
                    return <Redirect to="/login" />
                                }
            }} />

            <Route exact path="/owners/new" render={(props) => {
                return <OwnerForm  {...props}
                                   addOwner={this.addOwner}
                                   owners={this.state.owners} />

            }} />
        </React.Fragment>
    )
}
}

export default ApplicationViews
