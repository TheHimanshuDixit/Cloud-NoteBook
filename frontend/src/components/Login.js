import React, { useState } from 'react'

const Login = (props) => {

    const [credential, setCredential] = useState({ email: "", password: "" })


    const onChange = (e) => {
        e.preventDefault();
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`http://localhost:4000/api/auth/login`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: credential.email, password: credential.password }), // body data type must match "Content-Type" header
        });
        const json = await response.json();
        console.log(json);
        if(json.success){
            // Save the auth token and redirect
            // localStorage.setItem('token', json.authToken)
            props.showAlert("Logged in successfully", "success")
        }
        else{
            props.showAlert("Invalid Credentials", "danger")
            // alert("Invalid Credentials")
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onChange} value={credential.email} />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="current-password" className="form-control" id="password" name='password' onChange={onChange} value={credential.password} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Login