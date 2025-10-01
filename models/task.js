const {mongoose} = require('../db');
const {Schema} = mongoose;

const taskSchema = new Schema({
    title: String,
    status: {type: String, enum: ["todo","in_progress", "code_review", "completed"], default: "todo"},
    owner: String
}, {timestamps: true});

const Task = mongoose.model('Task', taskSchema);

module.exports = { Task };