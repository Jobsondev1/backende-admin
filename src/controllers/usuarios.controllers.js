const usuario = require('../models/usuario.model');

module.exports={
    index(req,res){
        res.json({message: 'Hello world from controller Usuario'});
    },
  async create(req,res){
     const {nome_usuario, email_usuario, senha_usuario, tipo_usuario} = req.body;

     let data = {};

     let user = Usuario.findOne({email_usuario})
     if(!user){
         data = {nome_usuario, email_usuario, senha_usuario, tipo_usuario};
         user = await Usuario.create(data);
        
         return res.status(200).json(user);
     }else{
         return res.status(500).json(user);
     }
    }
}