const express = require('express');
const path = require('path');
const routes = require('./src/rutas');
require('dotenv').config();
const { engine } = require('express-handlebars');
const API_KEY = process.env.API_KEY;

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');
app.use('/assets', express.static(path.join(__dirname, 'assets')));

const port = process.env.port || 3000;

app.get('/', function(req, res){
    res.render('noticias');
});

app.use('', routes);

app.listen(port, function() {
    console.log("App is running in port: " + port);
});

module.exports = API_KEY;