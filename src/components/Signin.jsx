import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const SignIn = () => {
    const [username, setusername] = useState("")
    const [password, SetPassword] = useState("")
    const[loading,setLoading]=useState("")
    const [message,setMessage]=useState("")
    const[error,setError]=useState("")
    // create a use Navigate Hook
    const navigate=useNavigate()
    const submit=async(e)=>{
        e.preventDefault()
        // update the loading hook to show a loading message
        setLoading("Please wait as we load your data")
   try {
    // create a new form data to hold the username and the password
            const data=new FormData()
            data.append('username',username)
            data.append('password',password)
            // post data to the backend API
           const response= await axios.post("https://malombeswala.alwaysdata.net/api/signin",data) 
           setLoading("")
           setMessage(response.data.message)
           setusername("")
           SetPassword("")
        //    check if the response has a user object
        if (response.data.user){
            // if user is found save the user item unde the local storage
            localStorage.setItem("user",JSON,String(response.data.user)
             ) //string changes the user object from object to string
            // redirect to home component
            navigate("/")
            }else{
                setError(response.data.message)
            }
   } catch (error) {
        setLoading("")
        setError(error.data.message)
   } 
}
    return (
        <div className="d-flex justify-content-center row text-center " >
            <div className="card shadow col-md-6 mt-4">
                {loading}
                {error}
                {message}
                <form onSubmit={submit} className="card-body">
                    <h1>Sign In</h1>
                    <input type="text" placeholder="Enter your username" className="form-control"
                        required value={username} onChange={(e) => setusername(e.target.value)} />
                    <br />
                    {username}
                    <input type="text" placeholder="Password" className="form-control" required value={password} onChange={(e) => SetPassword(e.target.value)} />
                    {password}
                    <br />
                    <button type="submit" className="btn btn-primary">Sign In</button>
                    <p>Don't have an account?</p>
                    <Link to='/signin'>sign in</Link>
                </form>
            </div>
        </div>
    )
}
export default SignIn;