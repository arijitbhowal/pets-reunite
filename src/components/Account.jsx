import React, { useState, useEffect, useContext } from "react";
import profileImage from '../assets/profile.png';  // Adjust the path accordingly
import './Account.css';
import { auth, useAuth, upload, db } from "../FirebaseConfig";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { BsBoxArrowRight } from 'react-icons/bs';

const Account = () => {
  const currentUser = useAuth();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState(profileImage);
  const history = useNavigate();
  const { dispatch } = useContext(AuthContext);

  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }

  function handleSubmit() {
    upload(photo, currentUser, setLoading)
      .then(() => {
        // Reload the page after a successful upload
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error during upload:', error);
      });
  }
  

  useEffect(() => {
    // Update the photoURL only if currentUser and currentUser.photoURL exist
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    } else {
      // If there's no photoURL, set it to the default profileImage
      setPhotoURL(profileImage);
    }

    // Load user details once when the component mounts
    getUserInfo();
  }, [currentUser]);

  const handleLogout = () => {
    auth.signOut().then(() => {
      dispatch({ type: "LOGOUT" });
      history("/login");
    });
  };

  const getUserInfo = async () => {
    const userDetailsElement = document.getElementById('userDetails');
  
    if (currentUser) {
      const userRef = doc(db, "users", currentUser.uid);
      const userSnap = await getDoc(userRef);
  
      if (userSnap.exists()) {
        const createdAtTimestamp = userSnap.data().createdAt;
        const createdAtDate = new Date(createdAtTimestamp.seconds * 1000 + createdAtTimestamp.nanoseconds / 1e6);
        const istCreatedAt = createdAtDate.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  
        userDetailsElement.innerHTML = `
          <p><span class="acc-label">Full Name:</span> ${userSnap.data().fullName}</p>
          <p><span class="acc-label">Email Id:</span> ${userSnap.data().email}</p>
          <p><span class="acc-label">Account Creation Time:</span> ${istCreatedAt}</p>
        `;
      } else {
        console.log("No such document!");
      }
    } else {
      console.log("User is not defined");
    }
  };
  

  return (
    <div className="account-page">
      <div className='fields'>
        <div className="upload-section">
          <input className="input-upload-file" type='file' onChange={handleChange} />
          <button className="profile" disabled={loading || !photo} onClick={handleSubmit}>Upload</button>
        </div>
        <img src={photoURL} className="avatar" alt='user' />
        <div className="user-details">
          <h3>User Details</h3>
          <div id="userDetails"></div>
        </div>
        <button className="profile danger-btn" disabled={!currentUser} onClick={handleLogout}>
          <BsBoxArrowRight/> Log Out
        </button>
      </div>
    </div>
  );
};

export default Account;
