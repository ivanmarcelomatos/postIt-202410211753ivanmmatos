const express = require('express');
const routes = express.Router();

const AnnotationController = require('./controllers/AnnotationController');

routes.post('/annotations', AnnotationController.create);
routes.get('/annotations', AnnotationController.read);

module.exports = routes;