import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addusers.css'

const Adduser = () => {
 let[name,setname]=useState("")
 let[age,setage]=useState("")
 let[email,setemail]=useState("")
 let[phonenumber,setphoneno]=useState("")

 let navigate=useNavigate()

 let handleSubmit=(e)=>{
    e.preventDefault();
    // data to be posted
    let userData={name,age,email,phonenumber}
   //posting to server
   fetch('http://localhost:2813/users',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(userData)

   })
   alert('user added sucessfully')
   navigate('/admin/user-list')
 }

    return (
        <div className="addUser">
            <h1>Add a New user</h1>
            <div className="forms1">
                <form action="" onSubmit={handleSubmit}>
                    <div className="name">
                        <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="Enter your name" />
                    </div>
                    <div className="age">
                        <input type="number" min='1'value={age} onChange={(e)=>setage(e.target.value)}  placeholder="Enter your age" />
                    </div>
                    <div className="emails">
                        <input type="email" value={email} onChange={(e)=>setemail(e.target.value)}  placeholder="Enter your Email" />
                    </div>
                    <div className="phone_num">
                        <input type="tel" minLength='10' maxLength='10' value={phonenumber} onChange={(e)=>setphoneno(e.target.value)}  placeholder="Enter phoneno" />
                    </div>
                    <div className="but">
                    <button>Add user</button>
                    </div>
                    
                  
                </form>
            </div>

        </div>
    );
}

export default Adduser;