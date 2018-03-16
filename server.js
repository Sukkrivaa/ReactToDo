var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;
//Either 3000 or the port set by our server
app.use(function(req,res,next){
  //If someone types https, we redirect them to our http version because we do not have support for https yet
  if (req.headers['x-forwarded-proto'] === "https"){
    res.redirect("http://" + req.hostname + req.url);
  }else{
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
