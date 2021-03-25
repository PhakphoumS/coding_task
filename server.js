var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var Task = require('./api/models/models');
var routes = require('./api/routes/routes');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
var url = 'mongodb://localhost:27017/taskdb';
mongoose
  .connect(url, { usedNewUrlParser: true })
  .then((db) => {
    console.log('Successfully connected to the database.');
  })
  .catch((err) => {
    console.log('Conntection to database failed.');
  });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

routes(app); //register the route

app.use((req, res) => {
  res.status(404).send({ url: req.originalUrl + ' not found' });
});

app.listen(port);

console.log('Starting REST api on server', port);
