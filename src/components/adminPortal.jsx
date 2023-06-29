import { Route, Routes } from "react-router-dom";
import AddBook from "./addbook";
import Adduser from "./addUser";
import AdminDashboard from "./adminDashboard";
import AdminNavbar from "./adminNavbar";
import BookList from "./bookList";
import ReadBook from "./readBook";
import UserList from "./userList";

const AdminPortal = () => {
    return (  
        <div className="adminportal">
            <AdminNavbar/>
        <Routes>
        <Route path="/" element={<AdminDashboard/>}/>
        <Route path="/book-list" element={<BookList/>}/>
        <Route path="/book-list/:id" element={<ReadBook/>}/>
        <Route path="/add-user"  element={<Adduser/>} />
        <Route path="/add-book" element={<AddBook/>}/>
        <Route path="/user-list"  element={<UserList/>}/>
        </Routes>
        </div>
    );
}
 
export default AdminPortal;