import React,{useState} from 'react';
import '../App.css'
import axios from 'axios';

const Signup = ({setToken}) =>{
    const [user, setUser] = useState({name:'',email:'',password:'',cpassword:''});
    const [err,setErr] = useState("")
    const [success,setSuccess] = useState("")
 
    const {name,email,password,cpassword} = user;

    async function implementSignUp(e){
        e.preventDefault();      
        if(password !== cpassword){
            setErr("Password and Confirm Password must be the same");
            setSuccess("")
            return
        }
        
// api call for post
        try{
            const response = await axios.post('https://instagram-express-app.vercel.app/api/auth/signup',{
            name:name,
            email:email,
            password:password
        })
        setSuccess(response.data.message)
        setErr("") 
        setToken(response.data.data.token)
        }catch(error){
            setErr(error.response.data.message)
            setSuccess("")
        }

        // setUser({name:'',email:'',password:'',cpassword:''})
    }

    return(
        <div className='user-container'>
            <form className='signup' onSubmit={implementSignUp}>
                <h3>SIGNUP</h3>
                <input 
                    type= "text" 
                    placeholder="Name" 
                    required 
                    value = {user.name}
                    onChange={(e)=>setUser({...user,name:e.target.value})}
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    required
                    value = {user.email}
                    onChange={(e)=>setUser({...user,email:e.target.value})}
                />
                    <input type="password" placeholder="Password" 
                    required
                    value = {user.password}
                    onChange={(e)=>setUser({...user,password:e.target.value})}
                />
                <input type="password"  
                    placeholder="Confirm Password" 
                    required
                    value = {user.cpassword}
                    onChange = {(e)=>{setUser({...user,cpassword:e.target.value})}}
                /> 

                <button >Sign Up</button>
            </form>

            {
            err && <h3 style={{color:"red"}}>{err}</h3>}
            {
            success && <h3 style={{color:"green"}}>{success}</h3>
            }
        </div>
    )
}

export default Signup;