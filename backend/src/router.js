const express = require('express');
const router = express.Router();

const AnnotationController = require('./controllers/AnnotationController');
const PriorityController = require('./controllers/PriorityController');
const ContentController = require('./controllers/ContentController');

router.post('/annotations', AnnotationController.create);
router.get('/annotations', AnnotationController.read);
router.delete('/annotations/:id', AnnotationController.delete);

router.get('/priorities', PriorityController.read);
router.post('/priorities/:id', PriorityController.update);

router.post('/contents/:id', ContentController.update);

module.exports = router;