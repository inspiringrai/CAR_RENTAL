import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import { makeBookingUrl } from "./urls";

export function CustomerDetails(props){

    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [address,setAddress] = useState('');
    const [docId,setDocId] = useState('');
    const [docName,setDocName] = useState('');

    const onSubmitDetails=async()=>{
        const request = {
            userId: Number.parseInt(window.localStorage.getItem('userId')),
            carId: props.carId,
            fromDate: props.fromDate,
            toDate:props.toDate,
            name,
            phone,
            address,
            docId,
            idType:docName
        }
        const options = {method:'POST',headers:{'Content-Type': 'application/json'},body:JSON.stringify(request)}
        const response = await fetch(makeBookingUrl,options);
        const didSucceed = await response.json();
        window.alert(didSucceed?'Success':'Failure');
    }
    return(
    <>
        <TextField value={name} onChange={(e)=>setName(e.target.value)} label="Name"/>
        <TextField value={phone} type="number" onChange={(e)=>setPhone(e.target.value)} label="Phone number"/>
        <TextField value={address} onChange={(e)=>setAddress(e.target.value)} label="Address"/>
        <TextField value={docId} onChange={(e)=>setDocId(e.target.value)} label="Document Id"/>
        <FormControl fullWidth>
                <InputLabel id="documentType">Document Type</InputLabel>
                <Select label-id = "documentType" label="Document Type" value={docName} onChange={(event)=>{setDocName(event.target.value)}}>
                    <MenuItem value=""><i>--Document type--</i></MenuItem>
                    <MenuItem value="AADHAR">Aadhar</MenuItem>
                    <MenuItem value="PAN">PAN Card</MenuItem>
                    <MenuItem value="DRIVING">Driving License</MenuItem>
                    <MenuItem value="PASSPORT">Passport</MenuItem>
                </Select>
            </FormControl>

            <Button onClick={props.goBack}>Back</Button>
            <Button onClick={()=>{onSubmitDetails()}}>Submit</Button>
       
    </>)
}