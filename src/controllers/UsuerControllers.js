const User = require('../models/userModel');

const UserController = {

async createUser(req, res){

    const bodyData = req.body

    try{
        
        const newUser =  await User.create(bodyData)
        return res.status(200).json(newUser)

    } catch(err){

        return res.status(400).json(err)
   }
},

async getUsers(req, res){

    try{
      
        const users = await User.find()
        return res.status(200).json(users)

    }catch(err){

        return res.status(400).json(err)
    }
 },
 async getUserByid(req, res){

        const {user_id} = req.params
    try{
      
        const users = await User.findById(user_id)
        return res.status(200).json(users)

    }catch(err){

        return res.status(400).json(err)
    }
 },
 

}

module.exports = UserController;