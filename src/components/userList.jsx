import { useEffect, useState } from "react";
import '../styles/userList.css'

const UserList = () => {
    let[user,setuser]=useState([])
     
    useEffect(()=>{
        let fetchdata=async()=>{
            let response= await fetch('http://localhost:2813/users')
            let data=await response.json()
            setuser(data)
        }
        fetchdata()
    },[])
    let remove=(id,name)=>{
        setuser(user.filter(x=>x.id!=id))
        alert(`${name}has been removed`)
    }
    return ( 
        <div className="userList">
            <h1>User List</h1>
            <div className="user_section">
                {user.map((data)=>(
                    <div className="user">
                     <h1>Name:{data.name}</h1>
                     <h2>Age:{data.age}</h2>
                     <h3>Email:{data.email}</h3>
                     <h4>Phn:{data.phonenumber}</h4>
                     <button onClick={()=>remove(data.id,data.name)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default UserList;