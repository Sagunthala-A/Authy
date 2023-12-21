import {useState} from 'react';
import axios from 'axios';

const Login = ({setToken}) =>{
    const [user,setUser] = useState({email:'',password:''})
    const [err,setErr] = useState('');
    const [success,setSuccess] = useState('')
    const {email,password} = user;

    async function handleLogin(e){
        e.preventDefault();
        try{
            const response = await axios.post('https://instagram-express-app.vercel.app/api/auth/login',{
                email:email,
                password:password
            })
            setSuccess(response.data.message);
            setErr('')
            setToken(response.data.data.token);

        }catch(error){
            setErr(error.response.data.message);
            setSuccess('');
        }

    }
    return(
        <div className='user-container'> 
            <form className="login" onSubmit={handleLogin}>
                <h3>LOGIN</h3>
                <input 
                    type='email' 
                    placeholder='Email'
                    required
                    onChange={(e)=>{setUser({...user, email: e.target.value})}}
                />
                <input
                    type='password' 
                    placeholder="Password"
                    required
                    onChange={(e)=>{setUser({...user, password: e.target.value})}}
                />
                <button type="submit">Login</button>
            </form>
            {
                err && <h3 style={{color:"red"}}>{err}</h3>
            }
            {
                success && <h3 style={{color:"green"}}>{success}</h3>
            }
        </div>
    )
}

export default Login;