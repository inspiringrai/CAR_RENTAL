import { MakeBookings } from "./makeBookings";
import {Navigate} from 'react-router-dom';
import { NavBar } from "./navbar";

export function CustomerPage(){
    return(
        <>
            <NavBar/>
            {
                (window.localStorage.getItem('usertype')==='ADMIN')?<Navigate to='/admin'/>
                :(window.localStorage.getItem('usertype')==='AGENT')?<Navigate to='/agent'/>
                :(window.localStorage.getItem('usertype')==='CUSTOMER')?'':<Navigate to='/signin'/>
            }
            <h1>This is customer page</h1>
            <MakeBookings/>
        </>
    )
}