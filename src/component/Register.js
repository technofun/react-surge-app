import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <div style={{display:'flex',justifyContent:'center'}}>
                <form style={{width:'50%',textAlign:'center'}}>
                    <fieldset>
                        <legend>Sign Up</legend>
                        <input type="text" placeholder="username" className="form-control"/><br />
                        <input type="password" placeholder="password" className="form-control"/><br />
                        <input type="password" placeholder="Confirm password" className="form-control"/><br />
                        <button type="submit" className="btn btn-primary btn-lg">Register</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}
