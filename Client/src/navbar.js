import { useState } from "react";
import { Navigate } from "react-router-dom";

export function NavBar(){
    const [navigate,setNavigate] = useState(false);
    return(
        <>
            <button onClick={()=>{window.localStorage.clear();setNavigate(true)}}>Sign Out</button>
            {navigate?<Navigate to='/signin'/>:''}
        </>
    )
}