import { useEffect, useState } from "react";
import { addCarUrl, editCarsUrl, getCarsUrl } from "./urls";

export function ModifyCars(){
    
    const [carDetails, setCarDetails] = useState([]);
    const [editRowNumber, setEditRowNumber] = useState(null);
    const [rowDetails, setRowDetails] = useState({});
    const apiRefreshCount = [0];
    
    useEffect(()=>{
        const getCars = async ()=>{
            const options = {method:'GET'}
            const response = await fetch(getCarsUrl,options);
            const jsonResponse = await response.json();
            setCarDetails(jsonResponse);
        }
        getCars();
    },apiRefreshCount)

    const onEdit = (index)=>{
        setEditRowNumber(index);
        setRowDetails({id:carDetails[index].id,model:carDetails[index].model,price:carDetails[index].price,availableCars:carDetails[index].availableCars});
    }
    
    const editModel = (value)=>{
        setRowDetails({
            id:rowDetails.id,
            model:value,
            price:rowDetails.price,
            availableCars:rowDetails.availableCars
        })
    }

    const editPrice = (value)=>{
        setRowDetails({
            id:rowDetails.id,
            model:rowDetails.model,
            price:value,
            availableCars:rowDetails.availableCars
        })
    }

    const editAvailableCars = (value)=>{
        setRowDetails({
            id:rowDetails.id,
            model:rowDetails.model,
            price:rowDetails.price,
            availableCars:value
        })
    }

    const onSubmitEdit = async()=>{
        const options = {method:'POST',headers:{'Content-Type': 'application/json'},body:JSON.stringify(rowDetails)}
        const response = await fetch(editCarsUrl,options);
        const didSucceed = await response.json();
        setEditRowNumber(null);
        window.alert(didSucceed?'Success':'Failure');
        apiRefreshCount[0] = apiRefreshCount[0]+1;
    }

    const onSubmitAdd = async()=>{
        const options = {method:'POST',headers:{'Content-Type': 'application/json'},body:JSON.stringify(rowDetails)}
        const response = await fetch(addCarUrl,options);
        const didSucceed = await response.json();
        setEditRowNumber(null);
        window.alert(didSucceed?'Success':'Failure');
        apiRefreshCount[0] = apiRefreshCount[0]+1;
    }

    const onAdd = ()=>{
        setRowDetails({
            model:'',
            price:0,
            availableCars:0
        })
        setEditRowNumber('ADD');
        
    }
    return(
        <>
            <table><tbody>
                <tr>
                    <th>Car Model</th>
                    <th>Car Price</th>
                    <th>Available Cars</th>
                    <th>{editRowNumber==null?<button onClick={()=>{onAdd()}}>Add</button>:''}</th>
                </tr>
                {
                    (editRowNumber==='ADD')?
                    <tr>
                        <td><input value={rowDetails.model} onChange={(e)=>{editModel(e.target.value)}}/></td>
                        <td><input type="number" min="0" value={rowDetails.price} onChange={(e)=>{editPrice(e.target.value)}}/></td>
                        <td><input type="number" min="0" value={rowDetails.availableCars}onChange={(e)=>{editAvailableCars(e.target.value)}}/></td>
                        <td><><button onClick={()=>{onSubmitAdd()}}>Add</button><button onClick={()=>{setEditRowNumber(null)}}>Cancel</button></></td>
                    </tr>
                    :''
                }
            {
                carDetails.map((carDetail,index)=>(
                    <tr key={index}>
                        <td>{editRowNumber===index?<input value={rowDetails.model} onChange={(e)=>{editModel(e.target.value)}}/>:carDetail.model}</td>
                        <td>{editRowNumber===index?<input type="number" min="0" value={rowDetails.price} onChange={(e)=>{editPrice(e.target.value)}}/>:carDetail.price}</td>
                        <td>{editRowNumber===index?<input type="number" min="0" value={rowDetails.availableCars}onChange={(e)=>{editAvailableCars(e.target.value)}}/>:carDetail.availableCars}</td>
                        <td>
                            {editRowNumber===null?<button onClick={()=>{onEdit(index)}}>Edit</button>
                            :editRowNumber===index?<><button onClick={()=>{onSubmitEdit()}}>Change</button><button onClick={()=>{setEditRowNumber(null)}}>Cancel</button></>:''}
                        </td>
                    </tr>
                ))
            }
            </tbody></table>
        </>
    )
}