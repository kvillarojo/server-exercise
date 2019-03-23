const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/keyConfig');

const authController = {
    register(req, res){
        const pass = 'test'
        // const hashpass = bcrypt.hashSync(req.body.password, 8);
        const username = 'test'
  
        // User.create({
        //     name : req.body.name,
        //     email : req.body.email,
        //     password : hashedPassword
        // },

        // function (err, user) {
        //     if (err) return res.status(500).send("There was a problem registering the user.")
        //     // create a token
        //     var token = jwt.sign({ id: user._id }, config.secret, {
        //     expiresIn: 86400 // expires in 24 hours
        //     });a
        //     res.status(200).send({ auth: true, token: token });
        // }); 

        if(username === req.body.username){
            if(pass === req.body.password){
                var token = jwt.sign({ id: 1 }, config.secret, {
                    expiresIn: 86400 // expires in 24 hours
                });
                return res.status(200).send({ auth: true, token: token, expiration: 86400});
            } 

           return res.status(200).send('usernmae match');
            
        }

        return res.status(500).send("There was a problem registering the user.")
    }
}

module.exports = authController
