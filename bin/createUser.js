const mongoose = require('mongoose')

const createUser = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, 'nome is required']
  },
  emial: {
    type: String,
    required: [true, 'nome is required']
  }
})

module.exports = createUser