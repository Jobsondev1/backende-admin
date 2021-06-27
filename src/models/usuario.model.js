const mongoose = require('mongoose');
const bccrypt = require('bcrypt');

const DataSchema = new mongoose.Schema({
    nome_usuario:String,
    email_usuario:String,
    senha_usuario:String,
    tipo_usuario:{type:Number, default:1},
},{
    timestamps:true,
});

DataSchema.pre('save',function(next){
    if(!this.isModified("senha_usuario")){
        return next();
    }
    this.senha_usuario = bccrypt.hashSync(this.senha_usuario,10);
});

const usuarios = mongoose.model('Usuario',DataSchema);
module.exports = usuarios;