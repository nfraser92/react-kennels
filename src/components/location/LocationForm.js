import React, { Component } from "react";

export default class LocationForm extends Component {
    // Set the initial state
    state = {
        locationName: "",
        locationAddress: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewLocation = evt => {
        evt.preventDefault()
        if (this.state.location === "") {
        window.alert("Please enter location info");
    } else {
        const location = {
            name: this.state.locationName,
            address: this.state.locationAddress
        };

        this.props.addLocation(location)
        .then(() => this.props.history.push("/"))
    }
}

render() {
    return (
        <React.Fragment>
            <form className ="locationForm">
              <div className="form-group">
                <label htmlFor="locationName">Location Name</label>
                <input type ="text" required className="form-control"
                onChange={this.handleFieldChange} id="locationName"
                placeholder="Enter Location Name" />
              </div>
              <div className="form-group">
                <label htmlFor="locationAddress">Location Address</label>
                <input type ="text" required className="form-control"
                onChange={this.handleFieldChange} id="locationAddress"
                placeholder="Enter Location Address" />
              </div>
              <button type="submit"
              onClick={this.props.constructNewLocation}
              className="btn btn-primary">
              Add Location</button>
            </form>
        </React.Fragment>
    )
}
}