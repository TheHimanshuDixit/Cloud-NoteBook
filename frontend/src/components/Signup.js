import React, { useState } from 'react'

const Signup = () => {

    const [credential, setCredential] = useState({ name: "", email: "", password: "", cpassword: "" })


    const onChange = (e) => {
        e.preventDefault();
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { name, email, password} = credential;
        const response = await fetch(`http://localhost:4000/api/auth/createuser`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }), // body data type must match "Content-Type" header
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authToken)
            // props.showAlert("Logged in successfully", "success")
        }
        else {
            // props.showAlert("Invalid Credentials", "danger")
            alert("Invalid Credentials")
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name='name' aria-describedby="nameHelp" onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="current-password" className="form-control" id="password" name='password' onChange={onChange} minLength={5} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                <input type="current-password" className="form-control" id="cpassword" name='cpassword' onChange={onChange} minLength={5} required/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Signup