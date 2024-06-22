import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){
    let [cityWeather, setCityWeather]= useState({
        city: "Delhi",
        description: "hazeeee",
        feels_like: 37.74,
        humidity: 55,
        temp: 32.05,
        temp_max: 32.05,
        temp_min: 32.05,
    });

    let getCityWeather=(result)=>{
        setCityWeather(result)
        // console.log(cityWeather);
    }

    return(
        <div>
            <h1>SkyCast</h1> 
            <SearchBox search={getCityWeather}></SearchBox>
            <InfoBox info={cityWeather}></InfoBox>
        </div>
    )
}