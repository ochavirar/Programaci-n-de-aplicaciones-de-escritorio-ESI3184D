const {Schema, model} = require('mongoose');

const tasksSchema = new Schema({
    title: {type: String},
    description: {type: String},
    status: {type: String, default: 'New'},
    creationDate: {type: Date}
});

module.exports = model('tasks', tasksSchema);