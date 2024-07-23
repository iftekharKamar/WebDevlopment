import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
export default function InfoBox({Info}){
  let INIT_URL ="https://www.shutterstock.com/image-photo/landscape-heavy-foggy-road-winter-260nw-1594521517.jpg";
    return(
        <div className="InfoBox">
            <h1>WeatherInfo - {Info.weather}</h1>
            <div className="cardContainer">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temprature={Info.temp}&deg;C</p>
          <p>Humidity={Info.humidity}</p>
          <p>Min temp ={Info.tempMin}&deg;C</p>
          <p>Max Temp ={Info.tempMax}&deg;C</p>
          <p> The weather can be describe as <b><i>{Info.weather}</i></b> and feels like {Info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}