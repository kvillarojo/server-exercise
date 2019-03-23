
const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();

// controller
const UserController = require('../controller/UserController');
const Authentication = require('../controller/AuthController');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// create application/json parser
const jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })   
 
// POST /login gets urlencoded bodies
// router.post('/login', jsonParser, function (req, res) {
//   if (!req.body) return res.sendStatus(400)
//     res.send(req.body.username)
// //   console.log(req)
// })

// Routes
router.get('/api/v1/user', UserController.getUser);

// User Login
router.post('/api/v1/login', jsonParser, Authentication.register);

module.exports = router;