const app = require('../src/app');
const mongoose = require('mongoose');
const port = normalizaPort(process.env.PORT || '3000');
const connection = mongoose.connect("mongodb+srv://Dallas:Da11a2975778@cluster0-qpxau.mongodb.net/test?retryWrites=true&w=majority");

function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

async function createUser(username) {
    return new User({
      username,
      created: Date.now()
    }).save()
  }

app.listen(port, function () {
    console.log(`app listening on port ${port}`)
})

exports.createUser();