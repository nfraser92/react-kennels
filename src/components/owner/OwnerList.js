import React, { Component } from 'react'
import "./Owner.css"

export default class OwnerList extends Component {
    render () {
        return (
            <article className="Owners">
            <div className="page-title">
            <h1>Owners</h1>
            </div>
            <div className="OwnerButton">
            <button type="button"
                    className="add-owner-button"
                    onClick={() => {
                        this.props.history.push("/owners/new")
                    }}> Add New Owner
                    </button>
            </div>
            {
                this.props.owners.map(owner =>
                    <div className="ownerCard" key={owner.id}>
                    <div><h6>{owner.name}</h6></div>
                    <div>Phone: {owner.phone}</div>
                    <button className="deleteButton" onClick={() => {
                                this.props.deleteOwner(owner.id)
                            }}
                        >Remove Customer</button>
                    </div>
                    )
            }
            </article>
        )
    }
}
