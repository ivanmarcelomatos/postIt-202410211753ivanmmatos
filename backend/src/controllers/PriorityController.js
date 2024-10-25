const Annotations = require('../models/AnnotationData');

module.exports = {

    async read(request, response) {
        const priority = request.query;
        const priorityNotes = await Annotations.find(priority);

        return response.json(priorityNotes);
    },

    async update(request, response) {
        const { id } = request.params;
        const annotation = await Annotations.findOne({ _id: id });

        if (!annotation) {
            return response.status(404).json({ error: "Annotation not found" });
        };
        
        annotation.priority = !annotation.priority;

        await annotation.save();

        return response.json(annotation);
    }

};