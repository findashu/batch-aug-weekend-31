const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const projectSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    alias: {
        type:String,
        required: true,
        unique:true,
        index:true
    },
    tags: [{
        name:String,
        class:String
    }],
    description: String,
    image: String,
    githubUrl: {
        type:String,
        trim:true
    },
    imageSliders: [String],
    relatedProjects : [
        {
            name:String,
            link:String
        }
    ],
    createdOn: {
        type: Date,
        default: Date.now()
    },
    updatedOn: {
        type: Date,
        default: Date.now()
    },

    status: {
        type:String,
        default:'active',
        enum:['active','inactive']
    }
})


// returns the instance of collection
module.exports = mongoose.model('projects',projectSchema)

