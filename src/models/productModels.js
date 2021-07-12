const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    productName:{
        type: String,
        require:true
    },
    productDescription: {
        type: String
    },
    productPrice: {
        type: Number,
        require: true
    },
    productQuatity: {
        type: Number,
        require: true
    },
    createdAt:{
        type: Date,
        default: Date.now
}

})

module.exports = mongoose.model('Product',ProductSchema);
