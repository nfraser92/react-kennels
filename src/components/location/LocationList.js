import React, { Component } from 'react'
import "./Locations.css"


/* Update your application so that the array of locations is passed from the Kennel state to the props of LocationList.
Then use the map() method to display all location names. */


export default class LocationList extends Component {
    render () {
        return (
            <React.Fragment>
            <section className="locations">
            <h1>Locations</h1>
            <div className="locationButton">
            <button type="button"
                    className="location-button"
                    onClick={() => {
                        this.props.history.push("/locations/new")
                    }}> Add New Location
                    </button>
            </div>
            {
                this.props.locations.map(location =>
                    <div key={location.id}>
                        <div><h3>{location.name}</h3></div>
                        <div>{location.address}</div>
                    </div>
                )

            }
            </section>
            </React.Fragment>
        )
    }
}