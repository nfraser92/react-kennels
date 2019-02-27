import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"  // Import EmployeeList component
import LocationList from "./LocationList"
import AnimalList from "./AnimalList"
import "../Kennel.css"

export default class Kennel extends Component {

    /*
        Although you will eventually be pulling your objects
        from your json-server API, for this chapter, we're
        faking it and just creating those arrays in the component
        itself
    */
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    // This will eventually get pulled from the API
    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    animalsFromAPI = [
        { id: 1, name: "Dog" },
        { id: 2, name: "Cat" },
        { id: 3, name: "Goat" },
        { id: 4, name: "Horse" },
        { id: 5, name: "Taiper" },
        { id: 6, name: "Pig" }
    ]

    ownersFromAPI = [
        { id: 1, name: "Ryan Tanay" },
        { id: 2, name: "Emma Beaton" },
        { id: 3, name: "Dani Adkins" },
        { id: 4, name: "Adam Oswalt" },
        { id: 5, name: "Fletcher Bangs" },
        { id: 6, name: "Angela Lee" }
    ]

    ownersPetsFromAPI = [
        {id: 1, ownerId: 1, petId: 6},
        {id: 2, ownerId: 2, petId: 5},
        {id: 3, ownerId: 3, petId: 4},
        {id: 4, ownerId: 3, petId: 6},
        {id: 5, ownerId: 4, petId: 1},
        {id: 6, ownerId: 4, petId: 2},
        {id: 7, ownerId: 4, petId: 3},
    ]

    state = {
        owners: this.ownersFromAPI,
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI,
        animalOwners: this.ownersPetsFromAPI,
    }

    render() {
        return (
            <section className="Kennel">
                <LocationList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
                <AnimalList animals={this.state.animals}
                            owners={this.state.owners}
                            animalOwners={this.state.animalOwners} />
            </section>
        )
    }
}
