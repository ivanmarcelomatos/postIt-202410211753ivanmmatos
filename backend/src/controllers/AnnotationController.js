const Annotations = require('../models/AnnotationData');
const mongoose = require('mongoose');

module.exports = {

    async read(request, response) {
        const annotationList = await Annotations.find();
        return response.json(annotationList);
    },
    
    async create(request, response) {
        const { title, notes, priority } = request.body;

        if(!notes || !title) {
            return response.status(400).json({ error: "title/annotation required!" })
        }

        const annotationCreated = await Annotations.create({
            title,
            notes,
            priority
        });
        return response.json(annotationCreated);
    },

    async delete(request, response) {
        const { id } = request.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return response.status(400).json({ error: "Invalid ID format!" });
        }

        try {
        
            const annotationDeleted = await Annotations.findOneAndDelete({ _id : id });
            
            if(annotationDeleted) {
                return response.json(annotationDeleted);
            };

            return response.status(404).json({ error: "no record was found to delete!" });
        } catch (error) {
            return response.status(500).json({ error: "Error deleting annotation", details: error });
        }
    }
};