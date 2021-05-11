import React, { Component } from 'react'

export default class ClassCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
        this.handleCounterMinus = this.handleCounterMinus.bind(this)
    }
    handleCounterPlus = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    handleCounterMinus() {
        this.setState({
            counter: this.state.counter === 0 ? 0 : this.state.counter - 1
        })
    }
    render() {
        return (
            <>
                <h3>Parent Component is: {this.props.parentName}</h3>

                <h1>{this.state.counter}</h1>

                <button className="btn btn-outline-danger"
                    onClick={this.handleCounterMinus}
                >- Decrease</button>
                <button className="btn btn-outline-success"
                    onClick={this.handleCounterPlus}
                >+ Increase</button>
            </>
        )
    }
}
