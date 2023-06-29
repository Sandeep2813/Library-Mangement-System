import { Link } from "react-router-dom";
import '../styles/landingPage.css'

const LandingPage=()=>{
    return(
        <div className="landingpage">
        <div className="selectLoginType">
            <div className="title">
            <h2>Library Mangement System</h2>
            </div>

            <div className="images">
            <img src="./images/img2.png" height="90" alt="" />
           <img src="./images/img4.png" height='90' alt="" />
            </div>
           <div className="btn">
           <button> <Link to='/admin-login'>Admin Login</Link></button>
          <button><Link to='/user-login'>User Login</Link></button>
           </div>
          
        </div>
        </div>
    )
}
export default LandingPage;