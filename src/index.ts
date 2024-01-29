/* Weather Dashboard
* Use a weather API to fetch data about the weather in different cities.
* Use async/await and promises to handle API requests.
* Display the data on your dashboard using JavaScript.
*/

//use a weather API to fetch data about the weather in different cities

const express = require('express');
const app = express();
app.use(express.json());
const dotenv = require('dotenv');
// let q: string="";
dotenv.config();

async function weatherIndia(q: string){
    const apiKey = process.env.WEATHER_API_KEY;
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${q}`);
    const weather = await response.json();
    return weather;
}

app.get("/weather-india", async function(req:any, res:any){
    const q= req.query.q;
    const weather = await weatherIndia(q);
    res.status(200).json(weather);
})


app.listen(3000, function(){
    console.log(`Weather server is listening on port 3000`)
})
