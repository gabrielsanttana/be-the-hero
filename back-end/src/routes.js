const {Router} = require('express');

const OngController = require('./controllers/OngController');

const routes = Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

module.exports = routes;