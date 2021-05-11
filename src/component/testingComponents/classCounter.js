import React, { Component } from 'react'

export default class ClassCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter : 0
        }
    }
    render() {
        return (
            <>
                <h3>Parent Component is: {this.props.parentName}</h3>
                <h1>{this.state.counter}</h1>
                <button className="btn btn-outline-danger">Increase</button>
            </>
        )
    }
}
