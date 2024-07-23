import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] =useState({
        city:"Delhi",
        feelsLike:24.8,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    });

    let upDateInfo=(res)=>{
        setWeatherInfo(res);
    }
    return(
        <div style={{textAlign:"center"}}>
       <h2>Search for the weather</h2>
        <SearchBox upDateInfo={upDateInfo}/>
        <InfoBox Info={weatherInfo}/>
        </div>
    )
}