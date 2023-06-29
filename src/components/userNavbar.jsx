import { Link } from "react-router-dom";
const UserNavbar = () => {
    return ( 
        <div className="adminNavbar">
             <div className="portal">
                    <h1>User Portal</h1>
                </div>
                <div className="links">
                    <ul>
                        <li><Link to="/user/">DashBoard</Link></li>
                        <li><Link to="/user/book-list" >Book List</Link></li>
                        <li><Link to="/">Logout</Link></li>
                    </ul>
                </div>
        </div>
     );
}
 
export default UserNavbar;