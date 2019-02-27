import React, { Component } from 'react'
import Animal from './Animal';
import "./AnimalList.css"


class AnimalList extends Component {
    render() {
        return (
            <section className="animals">
                <h1>Animals</h1>
                {
                    this.props.animals.map(animal =>
                        <Animal key={`animal-${animal.id}`}
                            animal={animal}
                            owners={
                                this.props.animalOwners
                                    .filter(ao => ao.petId === animal.id)
                                    .map(ao =>
                                        this.props.owners.find(
                                            o => o.id === ao.ownerId
                                        ).name
                                    )
                            } />
                    )
                }
            </section>
        )
    }
}

export default AnimalList