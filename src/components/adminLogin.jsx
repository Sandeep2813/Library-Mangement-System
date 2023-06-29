import{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/adminlogin.css'

const AdminLogin = () => {
    let[email,setemail]=useState("")
    let[password,setpassword]=useState("")
    let navigate=useNavigate()

    let login=(e)=>{
        e.preventDefault()
      let  data={email,password}//data from input
    //   console.log(data);
      if(email=="admin@gmail.com" &&password==1234){
        navigate('/admin/')
      }else{
        alert('Invalid creadentials')
      }
    }
    return (
        <div className="adminLogin">
            <div className="form">
                <h2 style={{fontSize:"50"}}>Login as Admin</h2>
                <div className="form_input">
                    <form action="" onSubmit={login} >
                        <div className="email">
                            <input type="email" placeholder="Enter  Email" value={email} onChange={(e)=>setemail(e.target.value)} required />
                        </div>
                        <div className="password">
                            <input type="password" placeholder="Enter password" value={password}  onChange={(e)=>setpassword(e.target.value)} required />
                        </div>
                        <button className="btn">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AdminLogin;