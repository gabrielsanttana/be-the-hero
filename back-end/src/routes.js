const {Router} = require('express');

const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');

const routes = Router();

routes.post('/sessions', SessionController.store);
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.store);
routes.delete('/incidents:id', IncidentController.delete);
routes.get('/profile', ProfileController.index);

module.exports = routes;