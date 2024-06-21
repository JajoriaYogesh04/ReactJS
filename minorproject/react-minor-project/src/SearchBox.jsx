import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useState } from 'react';


export default function SearchBox(){
    let [city, setCity]= useState("");

    let handleCity=(event)=>{
        // console.log(event.target.value)
        setCity(event.target.value)
    }
    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log(city);
        setCity("");
    }

    return(
        <div>
            <h1>Search for the weather!</h1>
            <form onSubmit={handleSubmit}>
                <TextField id="city" name='city' value={city} onChange={handleCity} label="City Name" variant="outlined" required style={{width:"25rem"}}/><br /><br />
                <Button type="submit" variant="outlined" startIcon={<SearchRoundedIcon />}>Search</Button>
            </form>
        </div>
    )
}