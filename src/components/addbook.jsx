import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addbook.css' 

const AddBook = () => {
    //title,categories,authors,pageCount,shortDescription,longDescription,thumbnailUrl
    let[title,settitle]=useState("")
    let[authors,setauthor]=useState("")
    let[categories,setcategry]=useState("")
    let[pageCount,setpage]=useState("")
    let[shortDescription,setshort]=useState("")
    let[longDescription,setlong]=useState("")
    let[thumbnailUrl,seturl]=useState("")
     
    let navigate=useNavigate()
     
    let handleSubmit=(e)=>{
          e.preventDefault();
          // data to be posted
          let bookData={title,authors,categories,pageCount,shortDescription,longDescription,thumbnailUrl}
         //posting to server
         fetch('http://localhost:2813/books',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(bookData)
         })
         alert('books added sucessfully')
         navigate('/admin/book-list')
    }


    return ( 
        <div className="addbook">
          <h1>Add a Book</h1>
          <div className="forms">
            <form action="" onSubmit={handleSubmit}>
             <div className="title">
               <input type="text" value={title} onChange={(e)=>settitle(e.target.value)} required placeholder="title of the book" />
             </div>
             <div className="authors">
                <input type="text" value={authors} onChange={(e)=>setauthor(e.target.value)} required placeholder="enter authors name" />   
             </div>
             <div className="categories">
                 <input type="text" value={categories} onChange={(e)=>setcategry(e.target.value)} placeholder="enter category of the book"/>
             </div>
             <div className="pagecount">
               <input type="number" value={pageCount} onChange={(e)=>setpage(e.target.value)} placeholder="page of the book" />
             </div>
             <div className="shortDescription">
                <textarea  value={shortDescription} onChange={(e)=>setshort(e.target.value)} placeholder="enter shortDescription of book" cols="30" rows="10"></textarea>

             </div>
             <div className="longDescription">
             <textarea value={longDescription} onChange={(e)=>setlong(e.target.value)} placeholder="enter longDescription of book" cols="30" rows="10"></textarea>

             </div>
             <div className="thumbnailUrl">
              <input value={thumbnailUrl} onChange={(e)=>seturl(e.target.value)} type="text" placeholder="image of the book" />
             </div>
             <div className="btn1">
             <button>Add Book</button>
             </div> 
            </form>
          </div>
        </div>
     );
}
 
export default AddBook;