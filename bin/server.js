const app = require('../src/app');
const mongoose = require('mongoose');
const port = normalizaPort(process.env.PORT || '3000');
mongoose.connect('mongodb+srv://Dallas:<Catolicasc123>@cluster0-qpxau.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    });

const userSchema = require('./createUser')
const User = mongoose.model('user', userSchema, 'user')

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

function createUser(username) {
    return new User({
      username,
      created: Date.now()
    }).save()
  }

app.listen(port, function () {
    console.log(`app listening on port ${port}`)
})

module.exports = createUser;