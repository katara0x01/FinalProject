import React, { useState } from "react";
import "./Timeline.css";
import Suggestions from "./Suggestions";
import Post from "./Posts/Post";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "narjis.ps",
      postImage: "https://i.pinimg.com/564x/3a/3c/05/3a3c05e0717ac41e1f27038ff1f244de.jpg",
      likes: 12,
      timespamp: "2d",
    },
    {
      user: "nadahaj",
      postImage: "https://i.pinimg.com/564x/ef/be/43/efbe43c70a47043e7c8d5db9801f4f7c.jpg",
      likes: 12,
      timespamp: "2d",
    },

    {
      user: "n",
      postImage: "",
      likes: 12,
      timespamp: "3d",
    },

    {
      user: "narjis",
      postImage: "",
      likes: 12,
      timespamp: "2d",
    },
  ]);
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map(post=>(
            <post user={post.user} postImage={post.postImage} likes={post.likes} timespamp={post.timespamp}/>
          ))}
          {/* <Post />
          <Post />
          <Post /> */}
        </div>
      </div>

      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
