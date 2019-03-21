
const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// create application/json parser
const jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })   
 
// POST /login gets urlencoded bodies
router.post('/login', jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
    res.send(req.body.username)
//   console.log(req)
})

// 
router.get('/', (req, res) => {
    res.send('Hello World!')
});


module.exports = router;