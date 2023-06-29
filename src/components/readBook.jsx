import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadBook = () => {
    let[books,setbook]=useState([ ])


    //to get route parameter
    let params=useParams()
    // console.log(params.id);
    useEffect(()=>{
        let fetchdata=async()=>{
            let response=await fetch(`http://localhost:2813/books/${params.id}`)
            let data=await response.json()
            setbook(data)
        }
        fetchdata()
    })
    return ( 
        <div className="readBook">
            <h1>Read Book</h1>
            <h2>{books.title}</h2>
            <p>{books.shortDescription}</p>
            <p>{books.longDescription}</p>
        </div>
     );
}
 
export default ReadBook;