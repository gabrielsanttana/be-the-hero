const {Router} = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');

const routes = Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.store);

module.exports = routes;