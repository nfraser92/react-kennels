import React, { Component } from "react";

export default class EmployeeForm extends Component {
  // Set initial state
  state = {
    locationName: "",
    locationAddress: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
  constructNewLocation = evt => {
    evt.preventDefault();
    if (this.state.location === "") {
      window.alert("Please enter a name");
    } else {
      const location = {
        name: this.state.locationName,
        address: this.state.locationAddress
      };

      // Create the animal and redirect user to location list
      this.props.addLocation(location)
        .then(() => this.props.history.push("/"));
    }
  };

  render() {
    return (
      <React.Fragment>
        <form className="locationForm">
          <div className="form-group">
            <label htmlFor="locationName">Location name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="locationName"
              placeholder="Location name"
              />
          </div>
          <div className="form-group">
            <label htmlFor="locationAddress">Location Address</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="locationAddress"
              placeholder="Location Address"
              />
          </div>
          <button
            type="submit"
            onClick={this.constructNewLocation}
            className="btn btn-primary"
          >
            Submit
          </button>
          </form>
              </React.Fragment>
    );
  }
}