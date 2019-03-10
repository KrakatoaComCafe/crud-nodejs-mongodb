
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Estrutura do usuário no banco
let UserSchema = new Schema({
    user: { type: String, required: true, max: 100},
    age: { type: Number, required: true},
    phone: {type: String, required: true, min:10, max: 11},
    is_admin: {type: Boolean, required: true}
});

module.exports = mongoose.model('users', UserSchema);
