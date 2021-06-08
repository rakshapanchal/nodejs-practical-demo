const mongoose = require('mongoose');

const content = new mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "categories"
    }, title: {
        type: String,
        required: true
    }, description: {
        type: String,
        required: true
    }, image: {
        type: String
    }
}, {
    versionKey: false,
    timestamps: true
});

const contentModel = mongoose.model('contents', content);
module.exports = contentModel;