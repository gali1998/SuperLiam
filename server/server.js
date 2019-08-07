var express = require('express');
var cors = require ('cors');
var path =  require('path');
var compression = require('compression');

const app = express();
app.use(cors());
/* eslint-disable no-console */
app.set('port', (process.env.PORT || 3000));

app.use(express.static('dist'));
app.use(compression());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(app.get('port'), function() {
  console.log("app is running on port " + app.get('port'));
});