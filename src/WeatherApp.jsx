import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){
    const[weatherInfo,setWeatherInfo]=useState({
        
            city:"Pune",
            feelsLike: 34.43,
            humidity: 94,
            temp :  27.99,
            tempMax :  27.99,
            tempMin :  27.94,
            weather :  "mist",
        
    })

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo)
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App </h2>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}