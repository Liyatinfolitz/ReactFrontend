import React from "react";
import HeaderHR from './HeaderHR';
// import Hrprojectlist from "./Hrprojectlist";
import Employeelist from "./Employeelist";



function Hrhome(){
    return(
        <div>
        <HeaderHR />
        <h1>Welcome HR</h1>
           
        <Employeelist />
        </div>
    )
    
}
export default Hrhome;