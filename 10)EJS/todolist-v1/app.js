const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js')
const app = express();

const items = ["Buy foods", "Cook foods", "Eat food"];
const workList = [];
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"))
app.get('/', function(req, res) {

let day = date.getDate();
  res.render('list', {
    listTitle: day,
    newListItems: items
  });
});

app.post('/', function(req, res) {
  let item = req.body.newItem;

  if (req.body.button === "Work") {
    workList.push(item);
    res.redirect('/work');
  } else {
    items.push(item);
    res.redirect('/');
  }
});

app.get('/work', function(req, res) {
  res.render('list', {
    listTitle: "Work",
    newListItems: workList
  });
})

app.get('/about', function(req, res){
  res.render('about.ejs',{} )
})

app.listen(3000, function() {
  console.log("Server listening on port no : 3000");
});
