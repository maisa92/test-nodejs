var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var TaskSchema = new Schema({
    name: {
        type: String,
        required: 'kindly enter the name of the tast'
    },

    Create_date: {
        type: Date,
        default: Date.now
    },

    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }  
});

module.exports = mongoose.model('Task', TaskSchema);