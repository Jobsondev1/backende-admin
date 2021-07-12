const mongoose = require('mongoose')

const ClientSchema = new mongoose.Schema({
    productName:{
        type: String,
        require:true
    },
    address: {
        type: String,
        require:true
    },
    telephone: {
        type: String,
        require: true
    },
    description: {
        type: String
    },
    createdAt:{
        type: Date,
        default: Date.now
}
})

module.exports = mongoose.model('Client',ClientSchema);
