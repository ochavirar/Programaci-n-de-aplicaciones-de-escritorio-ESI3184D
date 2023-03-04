const express = require('express');
const router = express.Router();
const noticias = require('../controladores/noticias');

router.get('/', noticias.listar);

module.exports = router;