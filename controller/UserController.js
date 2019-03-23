const UserController = {
    getUser(req, res){
        const user = {
            username: {
                firstname: 'Kim johhn',
                lastname: 'Villarojo',
                middlename: 'S',
                Suffex: ''
            },
            location: 'davao city',
            contact:{
                tel:'092-76812',
                cel: [98012749853,9087213470]
            },
            email:'testmail@gmail.com'
        }

        return res.send(user);
    }
}

module.exports = UserController
