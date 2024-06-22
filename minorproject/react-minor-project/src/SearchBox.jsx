import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useState } from 'react';


export default function SearchBox({search}){
    let [city, setCity]= useState("");
    let [error, setError]= useState(false);

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="b4dafafe7b9d15d910f33d432aeff051";


    let getWeatherInfo= async()=>{
        try{
            let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse= await response.json();
            // console.log(jsonResponse);
            let weatherInfo= {
                city: city,
                temp: jsonResponse.main.temp,
                temp_min: jsonResponse.main.temp_min,
                temp_max: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feels_like: jsonResponse.main.feels_like,
                description: jsonResponse.weather[0].description,
            }
            // console.log(weatherInfo);
            // search(weatherInfo);
            return weatherInfo;
        }
        catch(err){
            throw err;
        }
    }

    let handleCity=(event)=>{
        // console.log(event.target.value)
        setCity(event.target.value)
    }
    let handleSubmit=async(event)=>{
        try{
            event.preventDefault();
            // console.log(city);
            let result= await getWeatherInfo();
            search(result);
            setCity("");
        }
        catch(err){
            setError(true);
        }
    }

    return(
        <div style={{margin:"2rem"}}>
            <div style={{margin:"1rem"}}>
                {error && <Stack sx={{ width: '100%' }} spacing={2}><Alert severity="error">Sorry!...Place does not exist in our API</Alert></Stack>}
            </div>
            <form onSubmit={handleSubmit}>
                <TextField id="city" name='city' value={city} onChange={handleCity} label="City Name" variant="outlined" required style={{width:"25rem"}}/><br /><br />
                <Button type="submit" variant="outlined" startIcon={<SearchRoundedIcon />}>Search</Button>
            </form>
        </div>

    )
}