const Annotations = require('../models/AnnotationData');

module.exports = {

    async update(request, response) {
        const { id } = request.params;
        const { notes } = request.body;

        const annotation = await Annotations.findOne({ _id : id });

        if (!annotation) {
            return response.status(404).json({ error: "Annotation not found" });
        };

        if (!notes) {
            return response.status(400).json({ error: "No notes provided" });
        };

        annotation.notes = notes;

        await annotation.save();

        return response.json(annotation);
    }
    
};