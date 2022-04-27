import { ModifyCars } from "./modifyCars";
import {Navigate} from 'react-router-dom';
import { NavBar } from "./navbar";
export function AdminPage(){
    return(
        <>
            <NavBar/>
            {
                (window.localStorage.getItem('usertype')==='CUSTOMER')?<Navigate to='/customer'/>
                :(window.localStorage.getItem('usertype')==='AGENT')?<Navigate to='/agent'/>
                :(window.localStorage.getItem('usertype')==='ADMIN')?'':<Navigate to='/signin'/>
            }
            <h1>This is admin page</h1>
            <ModifyCars/>
        </>
        
    )
}