import React, { Component } from 'react'
import "./owner.css"

export default class OwnerList extends Component{
    render () {
        return (
            <article className="Owners">
            <h1>Owners</h1>
            {
                this.props.owners.map(owner =>
                    <div key={owner.id}>
                    <div><h6>{owner.name}</h6></div>
                    <div>{owner.phone}</div>
                    <div>{owner.email}</div>
                    <button onClick={() => {
                                this.props.deleteOwners(owner.id)
                            }}
                        >Remove Customer</button>
                    </div>)
            }
            </article>
        )
    }
}
