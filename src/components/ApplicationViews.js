import { Route } from "react-router-dom";
import React, { Component } from "react";
import AnimalList from "./animal/AnimalList";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";

class ApplicationViews extends Component {
  employeesFromAPI = [
    { id: 1, name: "Jessica Younker" },
    { id: 2, name: "Jordan Nelson" },
    { id: 3, name: "Zoe LeBlanc" },
    { id: 4, name: "Blaise Roberts" }
  ];

  locationsFromAPI = [
    { id: 1, name: "Nashville North", address: "500 Circle Way" },
    { id: 2, name: "Nashville South", address: "10101 Binary Court" }
  ];

  animalsFromAPI = [
    { id: 1, name: "Doodles" },
    { id: 2, name: "Jack" },
    { id: 3, name: "Angus" },
    { id: 4, name: "Henley" },
    { id: 5, name: "Derkins" },
    { id: 6, name: "Checkers" }
  ];

  ownersFromAPI = [

{
    id: 1,
    name: "Ryan Tanay",
    phone: "555-555-5555",
    email: "ryan@ryan.com"
},
{
    id: 2,
    name: "Emma Beaton",
    phone: "555-555-5555",
    email: "ryan@ryan.com"
},
{
    id: 3,
    name: "Dani Adkins",
    phone: "555-555-5555",
    email: "ryan@ryan.com"
},
{
    id: 4,
    name: "Adam Oswalt",
    phone: "555-555-5555",
    email: "ryan@ryan.com"
},
{
    id: 5,
    name: "Fletcher Bangs",
    phone: "555-555-5555",
    email: "ryan@ryan.com"
},
{
    id: 6,
    name: "Angela Lee",
    phone: "555-555-5555",
    email: "ryan@ryan.com"
},

  ];

  ownersPetsFromAPI = [
    { id: 1, ownerId: 1, petId: 6 },
    { id: 2, ownerId: 2, petId: 5 },
    { id: 3, ownerId: 3, petId: 4 },
    { id: 4, ownerId: 3, petId: 6 },
    { id: 5, ownerId: 4, petId: 1 },
    { id: 6, ownerId: 4, petId: 2 },
    { id: 7, ownerId: 4, petId: 3 }
  ];

  state = {
    employees: this.employeesFromAPI,
    locations: this.locationsFromAPI,
    animals: this.animalsFromAPI,
    animalOwners: this.ownersPetsFromAPI,
    owners: this.ownersFromAPI
  };

  render() {
    return (
        <React.Fragment>
            <Route exact path="/" render={(props) => {
                return <LocationList locations={this.state.locations} />
            }} />
            <Route path="/animals" render={(props) => {
                return <AnimalList animals={this.state.animals}
                animalOwners={this.state.animalOwners}
                owners={this.state.owners} />
            }} />
            <Route path="/employees" render={(props) => {
                return <EmployeeList employees={this.state.employees} />
            }} />
            <Route path="/owners" render={(props) => {
                return <OwnerList owners={this.state.owners} />
            }} />
        </React.Fragment>
    )
}
}

export default ApplicationViews;
