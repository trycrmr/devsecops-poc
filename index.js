var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello devsecops-poc world')
})

app.listen(3000, function() {
  console.log(`devsecops-poc running on port 3000`);
});