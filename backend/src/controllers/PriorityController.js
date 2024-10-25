const Annotations = require('../models/AnnotationData');

module.exports = {

    async read(request, response) {
        const { priority } = request.query;

        const filter = priority ? { priority: priority === 'true' } : {};

        const priorityNotes = await Annotations.find(filter);

        return response.json(priorityNotes);
    }

};