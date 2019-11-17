const mongoose = require('mongoose')

const createUser = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, 'nome is required']
  },
  created: {
    type: Date,
    required: [true, 'Created date is required']
  }
})

module.exports = createUser;
