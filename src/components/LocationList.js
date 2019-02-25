import React, { Component } from 'react'


/* Update your application so that the array of locations is passed from the Kennel state to the props of LocationList.
Then use the map() method to display all location names. */


export default class LocationList extends Component {
    render () {
        return (
            <article className="locations">
            <h1>Locations</h1>
            {
                this.props.locations.map(location =>
                    <div key={location.id}>
                        <div><h3>{location.name}</h3></div>
                        <div>{location.address}</div>
                    </div>
                )

            }
            </article>
        )
    }
}