const express = require('express');
const router = express.Router();

function middleware(req, res, next) {
    console.log("Wen through a middleware");
    if(req.query.token == '123'){
        next();
    } else {
        res.render('error');
    }
}

module.exports = middleware;