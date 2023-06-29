import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

const Login = (props) => {

    const [credential, setCredential] = useState({ email: "", password: "" })
    const [progress, setProgress] = useState(0)

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
        setProgress(100)
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken)
            props.callSuccess('Logged in Successfully');
            setTimeout(() => {
                window.location.href = "/notes";
            }, 2000);
        }
        else {
            props.callError('Invalid Credentials');
        }

    }

    return (
        <>
            <LoadingBar
                color='#f11946'
                progress={progress}
                waitingTime={800}
            />
            <section className="text-gray-600 body-font container m-auto md:my-10 md:mb-20">
                <div className="px-10 md:px-20 py-8 flex flex-wrap items-center">
                    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 className="title-font font-medium text-3xl text-gray-900">Login in to continue to cNotebook...</h1>
                        <p className="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Log In</h2>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email address</label>
                            <input onChange={onChange} value={credential.email} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                            <input onChange={onChange} value={credential.password} type="password" id="password" name='password' className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button type="submit" className="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Login</button>
                        <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login