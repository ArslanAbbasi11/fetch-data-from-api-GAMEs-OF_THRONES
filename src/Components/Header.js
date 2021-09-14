import React from 'react';
import { Link } from 'react-router-dom';


function AppHeader(){
return(
    <header>
        <div className="header-inner">
        <h3>welcome </h3> 
       <Link to="/" exact ><h4>Home</h4></Link>
        </div>
    </header>

)
}
export default AppHeader