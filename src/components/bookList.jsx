import { useEffect, useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import '../styles/bookList.css'
const BookList = () => {
    let[books,setBooks]=useState([])

     useEffect(()=>{
      let  fetchdata=async()=>{
        let response =await fetch('http://localhost:2813/books')
        let data=await response.json()
        setBooks(data)
        }
        fetchdata()

     },[books])

     //deleting a book from server permenatly
     let remove=(id,title)=>{
      fetch(`http://localhost:2813/books/${id}`,{
         method:'DELETE'
      })
      alert(`${title}will be deleted permanently`)
     }

     let location=useLocation()

     let navigate=useNavigate()
     let read=(id)=>{
      if(location.pathname=='/admin/book-list'){
      navigate(`/admin/book-list/${id}`)
      }else{
         navigate(`/user/book-list/${id}`)
      }
     }
    return ( 
        <div className="bookList">
            <h1>Book List:{books.length}</h1>
         <div className="book_section">
             {books.map((data)=>(
                <div className="book">
                  <div className="book_img">
                      <img src={data.thumbnailUrl} alt="" />
                  </div>
                   <div className="book_info">
                   <h1>Book Name:{data.title}</h1>
                  <p>Authors:{data.authors}</p>
                  <p>Category:{data.categories}</p>
                  <p>Pagecount:{data.pageCount}</p>
                 
                  <button className="write" onClick={()=>read(data.id)}>Read more</button>
                 {location.pathname=='/admin/book-list'&&  <button onClick={()=>remove(data.id,data.title)}>Delete</button>}
                   </div>
                </div>
             ))}
         </div>
        </div>
     );
}
 
export default BookList;