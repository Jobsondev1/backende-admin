const mongoose = require('mongoose');
const bccrypt = require('bcrypt');

const usuarioSchema = new mongoose.Schema({
    nome_usuario:String,
    email_usuario:String,
    senha_usuario:String,
    tipo_usuario:{type:Number, default:1},
},{
    timestamps:true,
});

usuarioSchema.pre('save',function(next){
    if(!this.isModified("senha_usuario")){
        return next();
    }
    this.senha_usuario = bccrypt.hashSync(this.senha_usuario,10);
    next();
});

const usuarios = mongoose.model('Usuarios',usuarioSchema);
module.exports = usuarios;