//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));




let array = [];

app.get("/", function (req, res) {
  res.render("home", { Home: homeStartingContent, post1: array });


});


app.get("/about", function (req, res) {
  res.render("about", { about: aboutContent });

});


app.get("/contact", function (req, res) {
  res.render("contact", { contact: contactContent });
});

app.get("/compose", function (req, res) {
  res.render("compose", { compose: "" });
});





app.post("/compose", function (req, res) {

  var post = {
    Title: req.body.postTitle,
    Content: req.body.postBody

  };

  array.push(post);

  res.redirect("/");

});


app.get("/posts/:postName", function (req, res) {
  //console.log(req.post.postName);

  var match = _.lowerCase(req.params.postName);

  /*array.forEach(function(arr){
    var mt=_.lowerCase(arr.Title);
    if(match===mt){
      res.render("post", {
        title: arr.Title,
        content: arr.Content
      });
    }
  });

});*/

 


for (var i = 0; i < array.length; i++) {

  //var mt=array[i].Title;
  const mt = _.lowerCase(array[i].Title); /*isme apn lodash use karenge jisse jab apn url 
                                          search me likhte he to jo uppercase or lower case
                                          ka issue nahi rehta he ,ye issue solve ho jaata he*/
if (match === mt) {
    res.render("post", {
      title: array[i].Title,
      content: array[i].Content
    });
  }
}



});






app.listen(3000, function () {
  console.log("Server started on port 3000");
});




