import {Navigate} from 'react-router-dom';
import { NavBar } from './navbar';

export function AgentPage(){
    return(
        <>
        <NavBar/>
        {
            (window.localStorage.getItem('usertype')==='ADMIN')?<Navigate to='/admin'/>
            :(window.localStorage.getItem('usertype')==='CUSTOMER')?<Navigate to='/customer'/>
            :(window.localStorage.getItem('usertype')==='AGENT')?'':<Navigate to='/signin'/>
        }
        <h1>This is agent page</h1>
        </>
    )
}