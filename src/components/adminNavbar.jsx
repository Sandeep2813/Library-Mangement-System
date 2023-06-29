import { Link } from "react-router-dom";
import '../styles/adminNabar.css'
const AdminNavbar = () => {
    return ( 
        <div className="adminNavbar">
                <div className="portal">
                    <h1>Admin Portal</h1>
                </div>
                <div className="links">
                    <ul>
                        <li><Link to="/admin/">DashBoard</Link></li>
                        <li><Link to="/admin/add-book" >Add Books</Link></li>
                        <li><Link to="/admin/add-user" >Add Users</Link></li>
                        <li><Link to="/admin/book-list" >Book List</Link></li>
                        <li><Link to="/admin/user-list">User List</Link></li>
                        <li><Link to="/">Logout</Link></li>
                    </ul>
                </div>
            

        </div>
     );
}
 
export default AdminNavbar;