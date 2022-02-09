const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res){
  res.sendFile(__dirname + "/index.html")
})

app.post('/', function (req, res){
  query  = req.body.CityName;
  apiKey = "6871fa6405a8b15b878b39fc87b31b97"
  unit = "metric"
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+ apiKey +"&units=" + unit
  https.get(url, function(response){
    console.log(response.statusCode)


  /*  const object = {
      name: "Brighton",
      favourColour: "green&blue"
    }
    console.log(JSON.stringify(object))*/

    response.on("data", function(data){
      const weatherData  = JSON.parse(data)
      const temperature = weatherData.main.temp
      const weatherDescription = weatherData.weather[0].description
      const icon = weatherData.weather[0].icon
      const imgurl = "http://openweathermap.org/img/wn/"+ icon +"@2x.png"
      /*res.send("<h1>The temperature in London is "+ temperature +
      " degree Celcius</h1> <br> The weather is currently "+ weatherDescription)*/
      res.write("<h1>The temperature in "+ query +" is "+ temperature + " degree Celcius</h1>")
      res.write("<br> The weather is currently "+ weatherDescription + "<br>")
      res.write("<img src='" + imgurl + "'>")
      res.send()
    })
  })

})

app.listen(3000, function(){
  console.log("Server is running on port no : 3000")
})
