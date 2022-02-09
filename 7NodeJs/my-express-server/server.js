const express = require("express");
const app = express();

app.get('/', function(req, res){
  //console(req)
  res.send("<h1> Hello, World! </h1>")
})

app.get('/contact', function(req, res){
  res.send('To contact me : brighton@gmail.com')
})

app.get('/about', function(req, res){
  res.send("What else will own this wedsite idiot. Its me pokemoke Grandmaster Brighton")
})
app.listen(3000, function(){
  console.log("Server is running on on port 3000");
});
