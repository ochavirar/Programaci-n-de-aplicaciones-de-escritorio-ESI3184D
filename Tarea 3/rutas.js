const path = require('path');
const express = require('express');
const auth = require('./src/Middlewares').auth;

function loadHome(req, res){
    const paginado = req.query.paginado === 'false' ? false : true;
    
    console.log("API works");
    //const ruta  = path.join(__dirname, 'src', 'views', 'index.html');
    //res.sendFile(ruta);
}

module.exports = function(app){

    app.use('/assets', express.static(path.join(__dirname, 'assets')));

    app.get('/', auth, loadHome);

    app.get('/', function(req, res) { //La función no se ejecuta, solo se define
        console.log("API works");
        res.send("API works");
    });
    
    app.get('*', function(req, res){ //Wildcard para una ruta no encontrada
        res.render('error');
    });
}