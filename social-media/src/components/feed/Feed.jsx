import "./feed.css";
import Share from "../share/Share.jsx";
import Post from "../post/Post.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
// import {Posts} from "../../dummyData.js"

export default function Feed() {
  const [posts, setPosts] = useState([]);
 

  useEffect(()=>{ 
    const fetchPosts = async()=>{
    const res = await axios.get("/posts/timeline/6473570a532e0d5a004450af");
    console.log(res.data);
    setPosts(res.data);
    };
    fetchPosts();
  },[])
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
