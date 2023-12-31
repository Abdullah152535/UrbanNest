const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    title:{type: String, required: true},
    description:{type: String, required: true},
    PropertyType :{type: String, required: true},
    price:{type: Number, required: true},
    photo:{type: String, required: true},
    creator:{type: mongoose.Schema.Types.ObjectId, ref:'User'},
})

const PropertyModel = mongoose.model('Property',PropertySchema);

module.exports = PropertyModel;
