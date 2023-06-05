import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
//import PersonIcon from '@mui/icons-material/Person';
// import {Users} from "../../dummyData.js"
import { useState ,useEffect, useContext} from "react";
import axios from "axios";
import {format} from "timeago.js";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext"


export default function Post({post}) {
const [like, setLike] = useState(post.likes.length);
const [isLiked, setIsLiked] = useState(false);
const [user, setUser] = useState({});
const PF = process.env.REACT_APP_PUBLIC_FOLDER;
const {user:currentUser} = useContext(AuthContext);

useState (()=>{
setIsLiked(post.likes.includes(currentUser._id))
},[currentUser._id, post.likes]);

useEffect(()=>{ 
    const fetchUsers = async()=>{
    const res = await axios.get(`/users?userId=${post.userId}`);
    // console.log(res);
    setUser(res.data);
    };
    fetchUsers();
  },[post.userId])

const handleLike=()=>{
try{
axios.put("/posts/"+post._id+"/like", { userId:currentUser._id});
}catch(err){
    console.log(err);
}
    setLike(isLiked? like-1: like+1);
    setIsLiked(!isLiked)
}
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <Link to={`profile/${user.username}`}>
                    <img  className="postProfileImg" src={user.profilePicture ? PF+user.profilePicture : PF+"pngwing.com.png"} alt=""  />
                    </Link>
                     <span className="postUsername">{user.username}</span>
                     <span className="postDate">{format(post.createdAt)}</span>
                </div>
                
                <div className="postTopRight">
                <MoreVertIcon/></div>
            </div>
            <div className="postMid">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={PF+post.img} alt=""  />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <ThumbUpIcon className="likeIcon" htmlColor="#3944bc" onClick = {handleLike}/>
                <FavoriteIcon className="likeIcon" htmlColor="#ca3433" onClick = {handleLike}/>
                <span className="postLikeCounter">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
