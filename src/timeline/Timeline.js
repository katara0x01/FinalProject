import React, { useState } from "react";
import Post from "./Posts/Post";
import Suggestions from "./Suggestions";
import "./Timeline.css";
import Stories from '../Component/Stories'
function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "narjis.ps",
      postImage:
        "https://i.pinimg.com/750x/be/d5/74/bed57435c426f16991d104551098150c.jpg",
      likes: 54,
      timestamp: "1d",
    },
    {
      user: "haninn",
      postImage:
        "https://i.pinimg.com/564x/44/e3/9a/44e39a16379caa64781e54e283830f04.jpg",
      likes: 43,
      timestamp: "1h",
    },
    {
      user: "katara0x01",
      postImage:
        "https://i.pinimg.com/564x/ab/af/ed/abafede02e4ff205f6ee01b574ec3e09.jpg",
      likes: 140,
      timestamp: "11h",
    },
    {
      user: "nemo40",
      postImage:
        "https://i.pinimg.com/564x/52/92/99/529299f567af8aec2734ff298a8aebe0.jpg",
      likes: 14,
      timestamp: "2d",
    },
  ]);

  return (
    <>
    <Stories style={{marginLeft: "10px"}} />

    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
    </>
  );
}

export default Timeline;
