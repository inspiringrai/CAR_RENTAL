import { Button, FormControl, InputLabel, MenuItem, TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Select from '@mui/material/Select';
import { useEffect, useState } from "react";
import { getCarsAvailableUrl, getCarsUrl } from "./urls";
import queryString from 'query-string';
import {format} from 'date-fns'
import { CustomerDetails } from "./customerDetails";
export function MakeBookings(){
    const [carDetails, setCarDetails] = useState([]);
    const [selectedCarIndex, setSelectedCarIndex] = useState('');
    const [fromDate,setFromDate] = useState(new Date());
    const [toDate,setToDate] = useState(new Date());
    const apiRefreshCount = [0];
    const [carsAvailable, setCarsAvailable] = useState(0);
    const [isDetailsPage, setIsDetailsPage] = useState(false);
    const onDetailsChange=async(carIndex)=>{
        setSelectedCarIndex(carIndex);
        if(carIndex===''){
            setCarsAvailable(0);
            return;
        }
        const queryParams = queryString.stringify({fromDate:format(fromDate,'dd/MM/yyyy'),toDate:format(toDate,'dd/MM/yyyy'),id:carDetails[carIndex].id})
            
        const options = {method:'GET'}
        const response = await fetch(`${getCarsAvailableUrl}?${queryParams}`,options);
        const jsonResponse = await response.json();
        console.log(jsonResponse)
        setCarsAvailable(jsonResponse);
    }

    useEffect(()=>{
        const getCars = async ()=>{
            const options = {method:'GET'}
            const response = await fetch(getCarsUrl,options);
            const jsonResponse = await response.json();
            setCarDetails(jsonResponse);
        }
        getCars();
    },apiRefreshCount)
    
    return(
        <>{
            (isDetailsPage)?<CustomerDetails goBack={()=>{setIsDetailsPage(false)}} carId={carDetails[selectedCarIndex].id} fromDate={format(fromDate,'dd/MM/yyyy')} toDate={format(toDate,'dd/MM/yyyy')}/>:
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker inputFormat="dd/MM/yyyy" value={fromDate} label="From date" onChange={(x)=>{setFromDate(x);onDetailsChange(selectedCarIndex);}} renderInput={(params) => <TextField {...params} />}/>
                
                <DesktopDatePicker inputFormat="dd/MM/yyyy" value={toDate} label="To date" onChange={(x)=>{setToDate(x);onDetailsChange(selectedCarIndex);}} renderInput={(params) => <TextField {...params} />}/>
                
                <FormControl fullWidth>
                    <InputLabel id="model">Model</InputLabel>
                    <Select label-id = "model" label="Model" value={selectedCarIndex} onChange={(event)=>{onDetailsChange(event.target.value);}}>
                        <MenuItem key={-1} value=""><i>--Model--</i></MenuItem>
                        {
                            carDetails.map((carDetail,index)=>(
                                <MenuItem key={index} value={index}>{carDetail.model}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
                {selectedCarIndex===''?'':
                    <>
                        <TextField value=
                            {`₹${carDetails[selectedCarIndex].price} per day * ${Math.ceil((Math.abs(toDate - fromDate)+1)/86400000)} days = ₹${carDetails[selectedCarIndex].price*Math.ceil((Math.abs(toDate - fromDate)+1)/86400000)}`} 
                        disabled/>
                        <TextField value={`${carsAvailable} available`} disabled/>
                        <Button onClick={()=>{setIsDetailsPage(true)}} disabled={carsAvailable===0}>Book</Button>
                    </>
                }
            </LocalizationProvider>
        }
        </>
    )
}