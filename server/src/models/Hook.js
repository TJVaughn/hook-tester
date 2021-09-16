const mongoose = require('mongoose')

const HookSchema = new mongoose.Schema({
    url: {
        required: true,
        type: String,
        trim: true
    },
    data: [
        
    ]
})

const Hook = mongoose.model('Hook', HookSchema)

module.exports = Hook