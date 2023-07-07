import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext,AuthContext } from '../../store/Context';
import {useNavigate} from 'react-router-dom';


const Create = () => {
  const {firebase}=useContext(FirebaseContext)
  const {user}=useContext(AuthContext)
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');
  const date = new Date();

  
const handleSubmit = () => {
  if(name && category && price && image) {

    firebase.storage().ref(`/image/${image.name}`)
    .put(image).then(({ref}) => {
      ref.getDownloadURL().then((url) => {
        console.log(url);
        firebase.firestore().collection('products').add({
          name,
          category,
          price,
          url,
          userId:user.uid,
          createdAt:date.toDateString()
        })
        navigate('/')
      })
    })
  }else{
    setError("ALL FIELDS ARE REQUIRED")
  }
}
  return (
    <Fragment>
      <Header />
      <div className="centerDiv">
      <div className="headingContainer"> 
            <h2 className="sellHereHeading">SELL HERE</h2>
          </div>
        <form>
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input
            className="input"
            type="number"
            id="fname"
            name="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
        </form>
        <br />
        <img
          alt="Posts"
          width="200px"
          height="200px"
          src={image ? URL.createObjectURL(image) : ''}
        ></img>
       
          <br />
          <input onChange={(e) => setImage(e.target.files[0])} type="file" />
          <br />
          <div className='error'>{error}</div>
          <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
     
      </div>
    </Fragment>
  );
};

export default Create;
