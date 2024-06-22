import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){
    let [cityWeather, setCityWeather]= useState({
        city: "--",
        description: "--",
        feels_like: 0,
        humidity: 0,
        temp: 0,
        temp_max: 0,
        temp_min: 0,
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