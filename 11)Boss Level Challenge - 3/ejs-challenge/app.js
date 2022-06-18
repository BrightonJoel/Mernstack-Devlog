//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
let posts = [];
const homeStartingContent = "Apple wants a weekend or expensive dui want to decorate. Which is always the creator nor the duration of her life. Carrots carrots just been running a lot. Product lived in this. Financing yeast rice vegetarian or clinical portal. That they are not members, nor members of the Donec ultrices tincidunt arcu. A lot of television targeted at the undergraduate nutrition. Of life, and the mountains shall be born, ultricies quis, congue in magnis dis parturient. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. The founder of basketball and football propaganda graduated drink at the arc. Performance skirt smile at any hate for hate vulputate. Running a lot of television targeted at the undergraduate nutrition.";
const aboutContent = "Textile manufacturing refinancing is beating. Textile manufacturing dictumst the kids elit. There diameter and boat manufacturing lorem. Consectetur adipiscing elit sagittis purus each one it is. But the price they want, but the smile Vulputate soccer massage. In some salad largest ecological. Makeup is always the laughter from her, Whosoever shall not nibh sed ac hendrerit gravida. Westinghouse peanut sauce or carrots mass of temperature. For the arrows of life, so that the earth element. In basketball largest peanut running Massa developers worth it.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

 const app = express();

 app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get('/', function(req, res) {
  res.render('home', {
    startingContent: homeStartingContent,
    posts: posts
  });
});

app.get('/about', function(req, res) {
  res.render('about', {
    about: aboutContent
  });
});

app.get('/contact', function(req, res) {
  res.render('contact', {
    contact: contactContent
  });
});

app.get('/compose', function(req, res) {
  res.render('compose', {});
});

app.get('/posts/:title', function(req, res){
  console.log(req.params.title)

  posts.forEach(function(ipost){
    if(_.lowerCase(ipost.title) == _.lowerCase(req.params.title)){
      console.log("Match Found!!");
      res.render('post', {title: ipost.title,
      post: ipost.content})
      return;
    }
  });
});

app.post('/compose', function(req, res) {
  const post = {
    title: req.body.publishTitle,
    content: req.body.post
  };
  posts.push(post);
  res.redirect('/');
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
