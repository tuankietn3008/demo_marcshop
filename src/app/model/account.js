const mongoose = require('mongoose');
const schema = mongoose.Schema;


const Account = new schema({
   username: String,
   password: String,
   email: String
},
{
   collection: 'accounts'
});


module.exports = mongoose.model('Account', Account);