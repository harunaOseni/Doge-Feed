import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "../StoryReel/StoryReel/StoryReel";
import MessageSender from "../MessageSender/MessageSender";
import Post from "../Post/Post";
import db from "../../../firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  console.log(posts);

  return (
    <div className="feed">
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.id}
          message={post.data.message}
          username={post.data.username}
          image={post.data.image}
          profilePicture={post.data.profilePicture}                                
          timestamp={post.data.timestamp}
        />
      ))}
    </div>
  );
}

export default Feed;
