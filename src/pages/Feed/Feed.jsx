import "./Feed.css";
import Post from "../../components/Post";
import { useState } from "react";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      data: {
        id: 1,
        profilePic: "Test",
        message: "This is Test Message",
        timestamp: "04-07-2023",
        username: "Pramod Koppu",
        image: "",
      },
    },
  ]);

  return (
    <>
      <Header />
      <div className="app__body">
        <SideBar />
        <div className="feed">
          {posts.map((post,idx) => (
            <Post
              key={idx}
              profilePic={post?.data.profilePic}
              message={post?.data.message}
              timestamp={post?.data.timestamp}
              username={post?.data.username}
              image={post?.data.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Feed;
