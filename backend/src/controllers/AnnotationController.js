const Annotations = require('../models/AnnotationData');

module.exports = {

    read(request, response) {
        return response.json({
            success: true
        });
    },
    
    create(request, response) {
        const { title, notes, priority } = request.body;

        console.log(title);
        console.log(notes);
        console.log(priority);
    }
};