import { Routes,Route, BrowserRouter } from "react-router-dom";
import BookList from "./bookList";
import UserDashBoard from "./userDashboard";
import UserNavbar from "./userNavbar";
import ReadBook from "./readBook";
const UserPortal = () => {
    return ( 
        <div className="userportal">
            <UserNavbar/>
            <Routes>
                <Route path="/" element={<UserDashBoard/>} />
                <Route path="/book-list" element={<BookList/>}/>
                <Route path="/book-list/:id" element={<ReadBook/>}/>
            </Routes>

        </div>
     );
}
 
export default UserPortal;