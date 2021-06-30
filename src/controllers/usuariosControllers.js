const Usuario = require('../models/usuarioModel');
//const bccrypt = require('bcrypt');



module.exports = {
    
    async store(req, res) {

        const {nome_usuario, email_usuario, senha_usuario, tipo_usuario} = req.body;

        let data = {nome_usuario,
             email_usuario,
             senha_usuario, 
             tipo_usuario
            };

        await Usuario.create(data, (err) =>{
           if(err) return res.status(400).json({
               error:true,
               messge:"Erro ao inserir usuario no banco"
           }) 
           return res.status(200).json({
               error:false,
               messge: "susuario cadastrado"
           })
        })
    } 


 /*   index(req,res){
        res.json({message: 'Hello world from controller Usuario'});
    },
    

  async create(req,res){
     const {nome_usuario, email_usuario, senha_usuario, tipo_usuario} = req.body;

     let data = {};

     let user = Usuario.findOne({email_usuario});
     if(!user){
         data = {nome_usuario, email_usuario, senha_usuario, tipo_usuario};
         user = await Usuario.create(data);
         return res.status(200).json(user);
     }else{
         return res.status(500).json("erro no sevidor");
     }*/

    /* try{
        const userExiste = await Usuario.findOne({email_usuario})
        if(!userExiste) return res.status(400).send({message: "não existe"})

        const validaSenha = await bccrypt.compare(senha_usuario, userExiste.senha_usuario)
        if(!validaSenha) return res.status(400).send({message: "Senha invalido"})

        return res.status(200).send(userExiste)
     }catch(err){
         return res.status(400).send(err)
     }*/
   
    
}