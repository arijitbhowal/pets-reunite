import React, { useState, useEffect } from "react";
import "./SuccessStories.css"; // Import your CSS file
import CreatePost from "./CreatePost";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../FirebaseConfig"; // Make sure to import your Firebase configuration
import { auth} from "../FirebaseConfig";
import Navbar from "./Navbar";

function SuccessStories({ isAuth}) {
  const [postLists, setPostLists] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      try {
        const posts = await getDocs(postsCollectionRef);
        setPostLists(posts.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    getPosts();
  }, []); // Make sure to include the dependency array to prevent unnecessary re-fetching

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    window.location.reload();
  };

  return (
    <div>
        <div className="nav">
        <Navbar />
        </div>
      <CreatePost />
      <div className="story">
        <div className="story-heading">
          <span>Comments</span>
          <h1>Success Stories</h1>
        </div>

        {postLists.map((post) => (
          <div className="story-box" key={post.id}>
            <div className="title">
              <div className="deletepost">
              {isAuth &&
  auth &&
  auth.currentUser && (
    <div>
      {console.log("isAuth:", isAuth)}
      {console.log("auth:", auth)}
      {console.log("currentUser:", auth.currentUser)}
      {console.log("uid:", auth.currentUser.uid)}
      {console.log("author:", post.author)}
      {console.log("authorId:", post.author && post.author.id)}
      {auth.currentUser.uid === post.author.id && (
        <button onClick={() => deletePost(post.id)} className="deletepost-btn">
          <img src="/delete-icon.svg" alt="Delete" />
        </button>
      )}
    </div>
  )}

              </div>
              <h1>{post.title}</h1>
              <span className="cp-name">{post.author && post.author.name}</span>
              <br />
              <span className="post-story">{post.postText}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuccessStories;
