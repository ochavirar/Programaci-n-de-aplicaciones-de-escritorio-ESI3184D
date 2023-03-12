const express = require('express');
const rutas = require('./rutas');
const routes = require('./src/Routes');
const path = require('path');
const { engine } = require('express-handlebars');

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/Views');
app.use('/assets', express.static(path.join(__dirname, 'assets')));

const port = 3000;
app.use('', routes);

rutas(app);

app.listen(port, function() {
    console.log("App is running in port " + port);
});