const express = require('express');
require('dotenv').config();
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const routes = require('./src/routes');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const swaggerConf = require('./swagger.config');

const MONGO_URL = process.env.MONGO_URL;

const swaggerDocs = swaggerJsDoc(swaggerConf);
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const port = process.env.PORT || 3000; 

app.use('', routes);

mongoose.connect(MONGO_URL)
    .then(() => {
        console.log("Connected to database");
        app.listen(port, function(){
            console.log("App running at port: " + port);
        })
    }).catch(err =>{
        console.log("Not connected to the database");
    });