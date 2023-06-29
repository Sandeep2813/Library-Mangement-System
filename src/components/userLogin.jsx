import { useNavigate } from "react-router-dom";
import '../styles/userlogin.css'

const UserLogin = () => {
    let navigate=useNavigate()
    let login=()=>{
        navigate('/user/')
     
    }
    return ( 
        <div className="userLogin">
            <div className="form">
                <h2 style={{fontSize:"50"}}>Login as User</h2>
                <div className="form_input">
                    <form action="" onSubmit={login} >
                        <div className="email">
                            <input type="email" placeholder="Enter Email"  required />
                        </div>
                        <div className="password">
                            <input type="password" placeholder="Enter password"  required />
                        </div>
                        <button className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default UserLogin;