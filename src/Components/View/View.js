import React from 'react';
import { useState,useContext,useEffect } from 'react';
import './View.css';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/Context';
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";

function View() {

  const [userDetails, setUserDetails] = useState()
  const {postDetails}=useContext(PostContext)
  const {firebase}=useContext(FirebaseContext)
  const db = getFirestore();

  useEffect(() => {
    const {userId}=postDetails
    const q = query(collection(db, "users"), where("id", "==", userId));

    const querySnapshot =  getDocs(q);
    querySnapshot.then((snapshot) => {

      snapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setUserDetails(doc.data())
        console.log(doc.id, " => ", doc.data());
      });
    })
  },[])
  
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails && postDetails?.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
        <p>&#x20B9; {postDetails && postDetails?.price} </p>
        <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
    {  userDetails &&  <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails?.username}</p>
          <p>{userDetails?.phone}</p>
        </div>
        }
      </div>
    </div>
  );
}
export default View;
