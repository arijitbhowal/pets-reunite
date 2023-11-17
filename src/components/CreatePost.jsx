import React, { useState, useEffect } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../FirebaseConfig";
import "./CreatePost.css";

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts");

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.email, id: auth.currentUser.uid },
      timestamp: serverTimestamp(),
    });
    window.location.reload();
  };

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1 className="cp-head">Add your story</h1>
        <div className="inputGp">
          <label className="cp-label"> Title:</label>
          <input className="cp-input"
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label className="cp-label"> Post:</label>
          <textarea className="cp-input"
            placeholder="Post..."
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <button onClick={createPost}> Submit Post</button>
      </div>
    </div>
  );
}

export default CreatePost;
