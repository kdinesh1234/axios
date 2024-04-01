

  
import React, {useEffect,useState} from 'react'
import Axios from 'axios'
var id = 11;
function App() {

  const [users,setUsers] = useState([]);
  const [name,setName] = useState("");
const [trigger,setTrigger] =useState(false);

  useEffect(()=>{ 
     Axios.get('https://jsonplaceholder.typicode.com/users/1')
  .then(res => setUsers(res.data))
},[])

const addUser =() =>{
  Axios.add('https://jsonplaceholder.typicode.com/users',{id:id++,name:name})
  .then(res => setUsers([...users,res.data]))

}
const editUser =() =>{
  Axios.put(`https://jsonplaceholder.typicode.com/users/${3}`,{name:name})
  .then(res =>  setUsers(res.data))

}
const deleteUser =() =>{
  Axios.delete(`https://jsonplaceholder.typicode.com/users/${1}`)
  .then(res =>  setUsers(res.data))

}

if(users == ""|| users==null) return "no users"






  return (
    <div>
     {/*users.map((u,i) => {
      return (
        <div key={i}>

{u.name}
</div>
      )
        
      
      


     })*/}
    {users.name}
     <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
     <button onClick={addUser}>adding</button>
     <button onClick={editUser}>editing</button>
     <button onClick={deleteUser}>deleting</button>
  


      </div>
  )
}

export default App