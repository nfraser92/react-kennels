import React, { Component } from 'react'
import "./AnimalList.css"
import Animal from './Animal';





class AnimalList extends Component {
    componentDidMount() {

    }


    render() {

        return (
            <article className="animals">
                {
                    this.props.animals.map(animal =>
                        <Animal key={`animal-${animal.id}`}
                            animal={animal}
                            deleteAnimal={this.props.deleteAnimal}
                            owners={
                                this.props.animalOwners
                                .filter(ao => ao.animalId === animal.id)
                                .map(ao =>
                                    this.props.owners.find(
                                        o => o.id === ao.ownerId
                                        ).name
                                        )
                                    } />
                                    )
                                }

            </article>

)
}
}

export default AnimalList