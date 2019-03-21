// requires
const express = require('express');
const routes = require('./routes/index');
const cors = require('cors');

// environment variables
process.env.NODE_ENV = 'development';

// config variables
const config = require('./config/config.js');

// module variables\
const app = express();

app.use(cors());

// var allowedOrigins = ['http://localhost:3000'];
// app.use(cors({
//   origin: function(origin, callback){
//     // allow requests with no origin 
//     // (like mobile apps or curl requests)
//     if(!origin) return callback(null, true);
//     if(allowedOrigins.indexOf(origin) === -1){
//       var msg = 'The CORS policy for this site does not ' +
//                 'allow access from the specified Origin.';
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   }
// }));

app.use('/', routes);

const port = process.env.PORT || global.gConfig.node_port
app.listen(port, () => {
  console.log(`server starts at http://localhost:${global.gConfig.node_port}`)
})
