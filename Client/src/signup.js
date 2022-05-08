import { Button, Card, CardContent, Container, Paper, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { createCustomerUrl, userSignInUrl } from "./urls";
import queryString from 'query-string';
import {Navigate} from 'react-router-dom'
import backgroundImage from './assets/carImage.jpg';

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
                (window.localStorage.getItem('usertype')==='ADMIN')?<Navigate to='/admin'/>
                :(window.localStorage.getItem('usertype')==='AGENT')?<Navigate to='/agent'/>
                :(window.localStorage.getItem('usertype')==='CUSTOMER')?<Navigate to='/customer'/>:''
            }
            
            {
                (userType==null)?''
                :(userType==='CUSTOMER')? <Navigate to='/customer'/>
                :(userType==='AGENT')? <Navigate to='/agent'/>
                :(userType==='ADMIN')? <Navigate to='/admin'/>
                :''
            }

                <div style={{height:'100%',position:'relative',display: 'flex',justifyContent: 'center', alignItems:'center'}}>
                        <div style={{opacity:0.5,position:'absolute',width:'100%',height:'100%',backgroundImage:`url(${backgroundImage})`,backgroundSize:'cover'}}/>
                        <Container sx={{width:600,position:'relative'}}>
                            <Card>
                                <CardContent>
                                    <h1 style={{textAlign:'center'}}>{props.registered?'Sign In':'Sign up'}</h1>
                                    
                                    <Stack>
                                        <TextField label="User Id" value={userId} onChange={(event)=>{setUserId(event.target.value)}}/>
                                        <TextField label="Password" value={password} type="password" onChange={(event)=>{setPassword(event.target.value)}}/>
                                        <div style={{textAlign:'center'}}><Button variant="contained" onClick={()=>{props.registered?signIn():signUp()}}>Submit</Button>
                                        <Button variant="contained" onClick={()=>{window.location.href=(props.registered?'signup':'signin')}}>{props.registered?'Sign up instead':'Go back and sign in'}</Button></div>
                                    </Stack> 
                                </CardContent>               
                            </Card>
                        </Container>
                        
                    
                </div>
        </>
    )
}

export default SignUp;