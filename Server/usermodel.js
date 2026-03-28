const mongoose = require('mongoose'); 


mongoose.connect('mongodb://localhost:27017/a')
  .then(() => console.log('connected'))
  .catch(err => console.error(' err', err.message));

const userSchema = new mongoose.Schema({
  
    name: {
        type: String,
       
    },
    age: {
        type: Number
    },
    email: {
        type: String
    }
}, {
    timestamps: true 
});

const User = mongoose.model("User", userSchema); 

module.exports = User; 
