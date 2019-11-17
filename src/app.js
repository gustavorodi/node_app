const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const newUser = require('../../bin/createUser');

// app.get('/foods', async (req, res) => {
//     const user = await newUser.find({});
  
//     try {
//       res.send(user);
//     } catch (err) {
//       res.status(500).send(err);
//     }
//   });

const router = express.Router();

//Rotas
const index = require('./routes/index.js');
const personRoute = require('./routes/personRoute.js');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', index);
app.use('/person', personRoute);

module.exports = app;