import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
export default function SearchBox({upDateInfo}){
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
    const API_URL ="https://api.openweathermap.org/data/2.5/weather";

    const API_KEY ="69836fd957f86f08c3822f5e239c3ca0";

    let getWeatherInfo =async()=>{
        try{
     let res=   await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
     let jsonRes = await res.json();
     let result={
        city:city,
        temp:jsonRes.main.temp,
        tempMin:jsonRes.main.temp_min,
        tempMax:jsonRes.main.temp_max,
        humidity:jsonRes.main.humidity,
        feelsLike:jsonRes.main.feels_like,
        weather:jsonRes.weather[0].description
     }
     console.log(result);
     return result;
    }catch(err){
        throw err;
    }
    }


    let handleCity =(event)=>{
        setCity(event.target.value);
    }

    let handleSubmit = async(event)=>{
        try{
        event.preventDefault();
        console.log(city);
        setCity("");
       let newInfo= await getWeatherInfo();
       upDateInfo(newInfo);
        }catch(err){
            setError(true);
        }
    }
    return (
        <div className="SearchBox">

            <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handleCity}/>
            <br/>
            <br/>
            <Button variant="contained" type='submit'>Search</Button>
            {error && <p style={{color:"red"}}>No such place exists</p>}
            </form>
        </div>
    )
}