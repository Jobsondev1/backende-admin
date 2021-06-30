const Usuario = require('../models/usuarioModel');
//const bccrypt = require('bcrypt');


module.exports = {
    
    async store(req, res) {
    /**
     * consultar se existe usuario por email
     */
       const userExiste = await Usuario.findOne({email_usuario: req.body.email_usuario});
        if(userExiste) {
        return res.status(400).json({
            error: true,
            messge: "Éste usuario já existe!"
        })
    }
        /**
     * Pega dados do corpo do fronte
     */
        const {nome_usuario, email_usuario, senha_usuario, tipo_usuario} = req.body;

        let data = {nome_usuario,
             email_usuario,
             senha_usuario, 
             tipo_usuario
            };

    /**
     * Criar um usuario no banco
     */
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

    
}