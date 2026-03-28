import Axios from 'axios'; 
import React, { useEffect, useState } from 'react';
import "./App.css"
function App() {
const [users, setUsers] = useState([]);
const [names, setnames] = useState('');
const [email, setemail] = useState('');
const [age, setage] = useState('');
 

// Send a GET request to the local server to show users
  useEffect(() => {
    Axios.get('http://localhost:3001/users')
      .then(res => {
      setUsers(res.data)
  })}, [users]);
// Send a post request to the local server to creact user
const creatuser=()=>{
      Axios.post('http://localhost:3001/users/creatuser',{
        name: names,
        age: age,
        email: email
      })

};
// Send a delete request to the local server to delete user
const deleteUser = async (id) => {
  await Axios.delete(`http://localhost:3001/users/deleteuser/${id}`);
  setUsers(users.filter(u => u._id !== id));
};



  return (
    <div>
      <nav></nav>
    
      <div className='inputcreat'>
        <h1>قائمة المستخدمين</h1>
        <input  type='text' placeholder='name'onChange={e=>setnames(e.target.value)}></input>
        <input  type='number' placeholder='age'onChange={e=>setage(e.target.value)}></input>
        <input type='email' placeholder='email' onChange={e=>setemail(e.target.value)}></input>
        <button className='btncreat' onClick={creatuser}>CreatUser</button>
      </div>
      <div className='listuser'>
      <table>
  <thead>
    <tr style={{ backgroundColor: '#333', color: 'white' }}>
      <th style={{ padding: '10px' }}>الاسم</th>
      <th style={{ padding: '10px' }}>العمر</th>
      <th style={{ padding: '10px' }}>إيميل</th>
      <th style={{ padding: '10px' }}>الإجراء</th>
    </tr>
  </thead>
  <tbody>
    {users.map(user => (
      <tr key={user._id}>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>{user.email}</td>
        <td>
          <button onClick={() => deleteUser(user._id)}>🗑️</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
        </div>
    </div>
  );
}

export default App;