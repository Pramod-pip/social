import "./Feed.css";
import Post from '../../components/Post';
import { useState } from "react";

const Feed = () => {
  const [posts, setPosts] = useState([{data: {
    id: 1,
    profilePic: 'Test',
    message:'This is Test Message',
    timestamp: '04-07-2023',
    username: 'Pramod Koppu',
    image: ''
  }}]);

  return (
    <div className="feed">
      
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post?.data.profilePic}
          message={post?.data.message}
          timestamp={post?.data.timestamp}
          username={post?.data.username}
          image={post?.data.image}
        />
      ))}
    </div>
  );
};

export default Feed;