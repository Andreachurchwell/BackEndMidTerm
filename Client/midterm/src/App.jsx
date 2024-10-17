import { useState } from 'react'

import './App.css'
import axios from 'axios'




function App() {


  const [user, setUser] = useState([])
  const [data, setData] = useState({})


  const [edit, setEdit] = useState({})
  // const [showEdit, setShowEdit] = useState(null)



  const handleSubmit = () => {
    axios({
      method: 'post',
      url: 'http://localhost:3002/create',
      data: data
    })
      .then((res) => {
        console.log('res=', res)

      })
  }





  const handleGetUsers = () => {
    axios({
      method: 'get',
      url: 'http://localhost:3002/getUsers',

    })
      .then((res) => {
        console.log('res=', res)
        setUser(res.data)
      })
  }





  const handleDelete = (e) => {
    console.log('delete hit')
    axios({
      method: 'delete',
      url: `http://localhost:3002/delete/${e.target.id}`
    })
      .then((deleted) => {
        console.log('deleted', deleted)
      })
  }





  const handleChange = (e) => {
    setData({
      username: e.target.value
    })
  }


  const handleEditChange = (e) => {
    setEdit({
      ...edit,
      [e.target.name]: e.target.value
    })
  }


  const handleEdit = (id) => {
    axios({
      method: 'put',
      url: `http://localhost:3002/update/${id}`,
      data: edit
    })
      .then((edited) => {
        console.log('edited', edited)
      })
      .catch((error) => {
        console.log('err', error)
      })
  }


  return (
    <>
      {/* input 
onchange
 handlesubmit api axios request to /create */}



 <h4>Backend Midterm</h4>
      {console.log('user==', user)}
      <input type="text" placeholder='username' onChange={(e) => handleChange(e)} />

      {user.map((item) => {
        return (
          <div key={item._id}>
            <p id={item._id}>{item.username}</p>




            <button id={item._id} onClick={(e) => handleDelete(e)}>delete</button>

            <button onClick={(e) => handleEdit(item._id)}>Edit</button>

            <input type="text" name='username' placeholder='edit username' onChange={handleEditChange} />

          </div>

        )
      })}







      <br /><br /><br />
      <button onClick={handleSubmit}>submit</button>
      <br /><br /><br />
      <button onClick={handleGetUsers}>get users</button>
      <input type="text" onChange={(e) => handleChange(e)} placeholder="New username" />
      <br /><br /><br />

      <br /><br />


      {/* Input for creating new user */}
      {/* <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleGetUsers}>Get Users</button> */}


    </>
  )
}

export default App
