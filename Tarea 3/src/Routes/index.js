const router = require('express').Router();

const rutasHome = require('./home');
const rutasFuturo = require('./future');
const rutasHobbies = require('./hobbies');
const rutasSuenos = require('./dreams');
const auth = require('./../Middlewares').auth;

router.use('', auth);
router.use('/home', rutasHome);
router.use('/future', rutasFuturo);
router.use('/hobbies', rutasHobbies);
router.use('/dreams', rutasSuenos);
module.exports = router;