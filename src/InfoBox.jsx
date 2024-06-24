import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./SearchBox.css"

export default function InfoBox({info}){
    const INIT_URL="https://media.istockphoto.com/id/958399764/photo/road-through-alley-on-a-misty-winter-day.jpg?s=2048x2048&w=is&k=20&c=Z1fmhkzqON3rV-7nSyoKwKaU1AwLhIg_iL6mdTmrijU="
    const HOT_URL="https://media.istockphoto.com/id/1280464607/photo/hot-weather-in-india.jpg?s=2048x2048&w=is&k=20&c=tyJ7Ifl2QbCGCmiMmpG7OfbcuU_43Zhwf77iO2xEjP4=";
    const COLD_URL="https://media.istockphoto.com/id/1063392716/photo/woman-feeling-cold-covered-with-warm-blanket-at-home.jpg?s=2048x2048&w=is&k=20&c=TbrmBs5lCnSUCyPAJnoYNb4crvX309oLfLKQR1jruT4=";
    const RAIN_URL="https://media.istockphoto.com/id/1225022383/photo/rain-on-umbrella-concept-for-bad-weather-winter-or-protection.jpg?s=2048x2048&w=is&k=20&c=oQ8iAWmuZudqk2OPqJslFENOv8d_BrJN_cr0J_Ox728=";
    
    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card className='card' sx={{ maxWidth: 345 }}>
                     <CardMedia
                       sx={{ height: 140 }}
                       image={info.humidity>80? RAIN_URL : info.temp>15 ? HOT_URL : COLD_URL}
                       title="green iguana"
                     />
                     <CardContent>
                       <Typography gutterBottom variant="h5" component="div">
                         {info.city}{info.humidity>80? <ThunderstormIcon/> : info.temp>15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
                       </Typography>
                       <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Max Temp = {info.tempMax}&deg;C</p>
                        <p>Weather = {info.weather}</p>
                        <p>Feels Like = {info.feelsLike}&deg;C</p>
                       </Typography>
                     </CardContent>
                </Card>
            </div>
        </div>
    )
}