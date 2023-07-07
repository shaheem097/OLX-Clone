import React,{useEffect,useContext} from 'react'
import './App.css';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContext, FirebaseContext } from './store/Context';
import Post from './store/PostContext'

function App() {
 const {setUser}=useContext(AuthContext)
 const {firebase}= useContext(FirebaseContext)
  useEffect(() => {
  firebase.auth().onAuthStateChanged((user)=>{
    setUser(user)
  })
  
    return () => {
     
    }
  })
  
  return (
    <Post>

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create' element={<Create />}/>
        <Route path='/view' element={<View />}/>
      </Routes>
    </Router>
    </Post>
  );
}

export default App;
