//modules
const express = require('express')
const cors = require('cors')
const app = express()
const mongooes = require('mongoose')
const userSchema = require('./Server/usermodel')
mongooes.connect('mongodb://localhost:27017/a')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// show users 
app.get('/users', async (req, res) => {
   
    const users = await userSchema.find();

    res.json(users);
  });  
// creat user

app.post('/users/creatuser', async (req, res) => {
  const { name, email, age } = req.body;
  
  if (name && email && age) {
    const newuser = new userSchema(req.body);
    await newuser.save();
    res.json(newuser);
  } 
});

// delete user
app.delete('/users/deleteuser/:id', async (req, res) => {
  const user = await userSchema.findByIdAndDelete(req.params.id);
  user ? res.json({ success: true }) : res.status(404).json({ error: 'غير موجود' });
});
// creat local host port 3001 
app.listen(3001,()=>{
    console.log("port is working in port 3001 !")
})
 

