import { useEffect, useState } from "react";

const Practice = () => {
   let[data,setdata]=useState([])

   useEffect(()=>{
    let fetchdata= async()=>{
        let response=await fetch("http://localhost:2813/books")
        let data=await response.json()
        setdata(data)
    }
    fetchdata()
   },[])

   let remove=(id,title)=>{
       setdata(data.filter(x=>x.id!=id))
       alert(`${title} has been remoed`)
   }
    return ( 
        <div className="practice">
            {data.map((data)=>(
            <div>
                <h1>{data.name}</h1>
                <button onClick={()=>remove(data.id,data.title)}>remove</button>
            </div>
            ))}
        </div>
     );
}
 
export default Practice;