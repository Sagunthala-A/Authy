import { useEffect,useState } from 'react';
import axios from 'axios';


const Dashboard = ({token,setToken}) =>{
    const [message,setMessage] = useState("");
    useEffect(()=>{
            async function fetchData(){
                try{
                    const response = await axios.get('https://instagram-express-app.vercel.app/api/auth/zuku', {
                        headers:{
                            Authorization:`Bearer ${token}`
                        }
                    })
                    setMessage(response.data.data.message)
    console.log('try block')
                }catch(error){
                    // setErr()
                    console.log(error.response.data.message)
                }
        }
        fetchData();
    },[token]);

    function handleLogout(e){
        e.preventDefault();
        setToken('');
    }
    return(
        <div>
            <h1>Dashboard</h1>
            {
                token && <div>
                    <p>Mark Zukerberg says: {message}</p>
                <button onClick={handleLogout}>Logout</button>
                </div>
            }
        </div>
    )
}

export default Dashboard;


