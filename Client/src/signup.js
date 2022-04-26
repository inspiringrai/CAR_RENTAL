import { Button, Card, TextField } from "@mui/material";
import { useState } from "react";
import { createCustomerUrl } from "./urls";

function SignUp(){
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const submitAPI = async ()=>{
        const options = {method:'POST',headers:{'Content-Type': 'application/json'},body:JSON.stringify({userId,password})}
        const response = await fetch(createCustomerUrl,options);
        const didSucceed = await response.json();
        window.alert(didSucceed?'Success':'Failure');
    }
    return(
        <Card>
            <h1>Signup</h1>
            <TextField label="User Id" value={userId} onChange={(event)=>{setUserId(event.target.value)}}/>
            <TextField label="Password" value={password} type="password" onChange={(event)=>{setPassword(event.target.value)}}/>
            <Button onClick={submitAPI}>Submit</Button>
        </Card>
    )
}

export default SignUp;