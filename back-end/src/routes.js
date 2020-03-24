const {Router} = require('express');

const ongsController = require('./controllers/ongsController');

const routes = Router();

routes.get('/ongs', ongsController.index);
routes.post('/ongs', ongsController.store);

module.exports = routes;