const Annotations = require('../models/AnnotationData');

module.exports = {

    async read(request, response) {
        try {
            const annotationList = await Annotations.find();
    
            return response.json(annotationList);
        } catch (error) {
            return response.status(500).json({ error: 'Error fetching annotations', details: error });
        }
    },
    
    create(request, response) {
        const { title, notes, priority } = request.body;

        console.log(title);
        console.log(notes);
        console.log(priority);
    }
};