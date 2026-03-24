import { Link } from 'react-router-dom';
import React, { useState } from 'react';
const SignUp = () => {
    // hooks
    const [username, setusername] = useState("")
    const [email, SetEmail] = useState("")
    const [password, SetPassword] = useState("")
    const [phone, SetPhone] = useState("")
    const[loading,setLoading]=useState("")
    const[success,setSuccess]=useState("")
    const[error,setError]=useState("")
    const submit=async(e)=>{
        e.preventDefault()
        setLoading("Please wait as we load your data")
        try{
            const data=new FormData()
            data.append('username',username)
            data.append('email',email)
            data.append('password',password)
            data.append('phone',phone)
            const response=await fetch("http://ecraswala.alwaysdata.net/api/signup",{
                method:"POST",
                body:data
            })
            const result=await response.json()
            if(result.error){
                setError(result.error)
                setLoading("")
            }else{
                setSuccess("Account created successfully")
                setLoading("")
            }
        }catch(error){
            setError("An error occurred while creating the account")
            setLoading("")
        }
    }
    return (
        <div className="d-flex justify-content-center row text-center " >
            <div className="card shadow col-md-6 mt-4" >
                <form action="" className="card-body">
                    <h1>Sign In</h1>
                    <input type="text" placeholder="Enter your username" className="form-control"
                        required value={username} onChange={(e) => setusername(e.target.value)} />
                    <br /><br />
                    {username}
                   
                    <input type="email" placeholder="Enter your email" className="form-control"
                        required value={email} onChange={(e) => SetEmail(e.target.value)} />
                    <br /><br />
                    {email}
                    <input type="password" placeholder="Enter your password"
                        className="form-control"
                        required value={password} onChange={(e) => SetPassword(e.target.value)} />
                    <br /><br />
                    {password}

                    <input type="text" placeholder="Enter your phone number" className="form-control"
                        required value={phone} onChange={(e) => SetPhone(e.target.value)} />
                    <br /><br />
                    {phone}
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                    <p className='text-center'>
                        Already have an account?&nbsp; &nbsp;<Link to='/signin'>sign in</Link></p>
                </form>
            </div>
        </div>
    )
}
export default SignUp;