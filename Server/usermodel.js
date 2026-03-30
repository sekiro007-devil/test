const mongoose = require('mongoose'); 


mongoose.connect('mongodb://localhost:27017/a')
  .then(() => console.log(' تم الاتصال بقاعدة البيانات بنجاح'))
  .catch(err => console.error(' فشل الاتصال بقاعدة البيانات:', err.message));

const userSchema = new mongoose.Schema({
    id:{
        type:Number,
        
    },
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

const User = mongoose.model("User", userSchema); // سينشئ collection باسم "users"

module.exports = User; 
