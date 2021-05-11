import React from 'react'

function Login() {
    return (
        <div style={{display:'flex',justifyContent:'center'}}>
            <form style={{width:'50%',textAlign:'center'}}>
                <fieldset>
                    <legend>Sign In</legend>
                    <input type="text" className="form-control" placeholder="username" /><br />
                    <input type="password" className="form-control" placeholder="password" /><br />
                    <button type="submit" className="btn btn-primary btn-lg">Log In</button>
                </fieldset>
            </form>
        </div>
    )
}

export default Login
