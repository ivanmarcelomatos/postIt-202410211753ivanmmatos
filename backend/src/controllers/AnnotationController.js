const Annotations = require('../models/AnnotationData');

module.exports = {

    async read(request, response) {
        try {
            const annotationList = await Annotations.find();
        return response.json(annotationList);
        } catch (error) {
            return response.status(500).json({ error: "Failed to fetch annotations." }); 
        }
    },
    
    async create(request, response) {
        const { title, notes, priority } = request.body;

        if(!notes || !title) {
            return response.status(400).json({ error: "title/annotation required!" })
        }

        try {   
        const annotationCreated = await Annotations.create({
            title,
            notes,
            priority
        });
        return response.status(201).json(annotationCreated);
        } catch (error) {   
            return response.status(500).json({ error: "Failed to create annotation." });
        }
    },

    async delete(request, response) {
        const { id } = request.params;
        
        try {
        const annotationDeleted = await Annotations.findOneAndDelete({ _id : id });
    
        if(annotationDeleted) {
            return response.json(annotationDeleted);
        };

        return response.status(404).json({ error: "no record found to delete!" });
        } catch (error) {
            return response.status(500).json({ error: "Failed to delete annotation." });
        }
    }
};