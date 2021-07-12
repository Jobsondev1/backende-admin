const express = require('express');
const UsuerControllers = require('./controllers/UsuerControllers');

const routes = express.Router();

routes.post('/api/user', UsuerControllers.createUser)
routes.get('/api/user', UsuerControllers.getUsers)
routes.get('/api/user/:user_id', UsuerControllers.getUserByid)


module.exports = routes;