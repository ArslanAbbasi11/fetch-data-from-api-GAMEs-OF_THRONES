
import { useState,useEffect } from "react";

const ShowMore=({match})=>{
    //console.log(match);
   

    const [User,setUser]=useState({});

    useEffect(() => {
      if(User)  fetchMore();
    }, []);

    const fetchMore = async () => {
        const url = `https://thronesapi.com/api/v2/Characters/${match.params.id}`;
         console.log(match.params.id+"  this is id from url")
      try {
        const response = await fetch(url);
        const json = await response.json();
        setUser({...json});
      } catch (error) {
        console.log("error", error);
      }
    }
    console.log(User.id +"  this is id");

return(
    <div className="title">
   
   <table id={User.id}  >  
           <tr >
               <th>USER ID</th>
               <th>First Name</th>
               <th>Lastt Name</th>
               <th>Title</th>
               <th>Family</th>
               <th>Image</th>
         
             </tr>
     
          
                   <tr  className="tableRow">

                       <td className="table-data" >{User.id}</td>
                       <td className="table-data" >{User.firstName}</td>
                       <td className="table-data" >{User.lastName}</td>
                       <td className="table-data" >{User.title}</td>
                       <td className="table-data" >{User.family}</td>
                       <td className="table-data" ><img src={User.imageUrl}/></td>
                
                  </tr>
            </table>
       
    </div>
)
}

export default ShowMore;