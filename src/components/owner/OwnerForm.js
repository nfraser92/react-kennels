import React, { Component } from "react";

export default class OwnerForm extends Component {
  // Set initial state
  state = {
    ownerName: "",
    ownerPhone: ""
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
  constructNewOwner = evt => {
    evt.preventDefault();
    if (this.state.owner === "") {
      window.alert("Please enter a name");
    } else {
      const owner = {
        name: this.state.ownerName,
        phone: this.state.ownerPhone
      };

      // Create the animal and redirect user to animal list
      this.props
        .addOwner(owner)
        .then(() => this.props.history.push("/Owners"));
    }
  };

  render() {
    return (
      <React.Fragment>
        <form className="ownerForm">
          <div className="form-group">
            <label htmlFor="ownerName">Owner name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="ownerName"
              placeholder="Owner name"
              />
          </div>
          <div className="form-group">
            <label htmlFor="ownerPhone">Owner phone</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="ownerPhone"
              placeholder="Owner Phone"
              />
          </div>
          <button
            type="submit"
            onClick={this.constructNewOwner}
            className="btn btn-primary"
          >
            Submit
          </button>
          </form>
              </React.Fragment>
    );
  }
}