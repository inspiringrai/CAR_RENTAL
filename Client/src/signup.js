import { Button, Card, TextField } from "@mui/material";
import { useState } from "react";
import { createCustomerUrl, userSignInUrl } from "./urls";
import queryString from 'query-string';
import {Navigate} from 'react-router-dom'

function SignUp(props){
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState(null);
    const signUp = async ()=>{
        const options = {method:'POST',headers:{'Content-Type': 'application/json'},body:JSON.stringify({userId,password})}
        const response = await fetch(createCustomerUrl,options);
        const didSucceed = await response.json();
        window.alert(didSucceed?'Success':'Failure');
    }

    const signIn = async ()=>{
        const queryParams = queryString.stringify({userId,password})
        const options = {method:'GET'}
        const response = await fetch(`${userSignInUrl}?${queryParams}`,options);
        const jsonResonse = await response.json();
        if(jsonResonse.usertype==null) {
            window.alert('Incorrect userid or password');
            return;
        }
        window.localStorage.setItem('usertype',jsonResonse.usertype)
        window.localStorage.setItem('userId',jsonResonse.id)
        setUserType(jsonResonse.usertype)
        
    }
    
    return(
        <>
            {
                (userType==null)?''
                :(userType==='CUSTOMER')? <Navigate to='/customer'/>
                :(userType==='AGENT')? <Navigate to='/agent'/>
                :(userType==='ADMIN')? <Navigate to='/admin'/>
                :''
            }
            <Card>
                <h1>{props.registered?'Sign In':'Sign up'}</h1>
                <TextField label="User Id" value={userId} onChange={(event)=>{setUserId(event.target.value)}}/>
                <TextField label="Password" value={password} type="password" onChange={(event)=>{setPassword(event.target.value)}}/>
                <Button onClick={()=>{props.registered?signIn():signUp()}}>Submit</Button>
            </Card>
        </>
    )
}

export default SignUp;