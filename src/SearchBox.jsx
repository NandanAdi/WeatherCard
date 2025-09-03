import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    // Weather Interpretation Codes from Open-Meteo documentation
    const WMO_CODES = {
        0: "Clear sky",
        1: "Mainly clear",
        2: "Partly cloudy",
        3: "Overcast",
        45: "Fog",
        48: "Depositing rime fog",
        51: "Light drizzle",
        53: "Moderate drizzle",
        55: "Dense drizzle",
        61: "Slight rain",
        63: "Moderate rain",
        65: "Heavy rain",
        80: "Slight rain showers",
        81: "Moderate rain showers",
        82: "Violent rain showers",
        95: "Thunderstorm",
    };

    const getWeatherInfo = async (city) => {
        try {
            // 1. Geocoding API Call
            const GEOCODING_API_URL = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`;
            let geoResponse = await fetch(GEOCODING_API_URL);
            let geoJson = await geoResponse.json();

            // Handle city not found
            if (!geoJson.results) {
                throw new Error("City not found.");
            }

            const { latitude, longitude, name } = geoJson.results[0];

            // 2. Weather Forecast API Call
            const WEATHER_API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code&daily=temperature_2m_max,temperature_2m_min`;
            
            let weatherResponse = await fetch(WEATHER_API_URL);
            let weatherJson = await weatherResponse.json();

            // 3. Format the result to match what InfoBox expects
            let result = {
                city: name,
                temp: weatherJson.current.temperature_2m,
                tempMin: weatherJson.daily.temperature_2m_min[0],
                tempMax: weatherJson.daily.temperature_2m_max[0],
                humidity: weatherJson.current.relative_humidity_2m,
                feelsLike: weatherJson.current.apparent_temperature,
                weather: WMO_CODES[weatherJson.current.weather_code] || "Unknown",
            };
            
            console.log(result);
            return result;
        } catch (err) {
            console.error(err);
            throw err;
        }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            setError(false); // Reset error on new search
            console.log(`Searching for: ${city}`);
            let newInfo = await getWeatherInfo(city);
            updateInfo(newInfo);
            setCity(""); // Clear input field after successful search
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required />
                <br /><br />
                <Button variant="contained" type='submit'>
                    Search
                </Button>
                {error && <p style={{ color: "red" }}>No such place found!</p>}
            </form>
        </div>
    );
}
