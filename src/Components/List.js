import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
const UserList=()=>{
    //use State here which will hold data from api
        const [Data,setData]=useState([]);

        // state for search
        const [search,setSearch]=useState();
        //useEffect here,,which will run function that call api
        useEffect(() => {
            fetchData();
        }, []);
    
///function to call api

    const fetchData = async () => {
        const url = 'https://thronesapi.com/api/v2/Characters';
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData([...json]);//storing data in state
        console.log(Data);
      } catch (error) {
        console.log("error", error);
      }
    }
    ////Display data from state
    const Display=()=>{
             
        return(
            <table>
           <thead>
           <tr >
               <th>USER ID</th>
               <th>First Name</th>
               <th>Lastt Name</th>
               <th>Title</th>
               <th>Family</th>
               <th>Image</th>
             <th>Option</th>
             </tr>
           </thead>
           { Data?.map(value=>(
               <tbody className="table-body">
                   <tr id={value.id} className="tableRow">

                       <td className="table-data" >{value.id}</td>
                       <td className="table-data" >{value.firstName}</td>
                       <td className="table-data" >{value.lastName}</td>
                       <td className="table-data" >{value.title}</td>
                       <td className="table-data" >{value.family}</td>
                       <td className="table-data" ><img src={value.imageUrl}/></td>
                  <td><Link to={`/details/${value.id}`}><button type="button" >More Details</button></Link></td>
                  </tr>
               </tbody>
           )
           )}
           </table>
        )
    }
    return(
        <div>
            <form>
                <input type="text" placeholder="Search" value={search} 
                 onChange={e=>(setSearch(search,e.target.value))}/>
                </form>

             
            <Display/>
        </div>
    )
}
export default UserList;