import "./feed.css";
import Share from "../share/Share.jsx";
import Post from "../post/Post.jsx";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
// import {Posts} from "../../dummyData.js"

export default function Feed({username}) {
  const [posts, setPosts] = useState([]);
  const {user} = useContext(AuthContext);

  useEffect(()=>{ 
    const fetchPosts = async()=>{
    const res = username  
    ? await axios.get("/posts/profile/"+ username)
    : await axios.get("/posts/timeline/" + user._id);
    console.log(res.data);
    setPosts(res.data);
    };
    fetchPosts();
  },[username, user._id])
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        {
        posts.map((p)=>
        (  <Post key ={p._id} post = {p}/>))
        }
        
      </div>
    </div>
  )
}
