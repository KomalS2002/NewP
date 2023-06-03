import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Users} from "../../dummyData.js"
import { useState } from "react";


export default function Post({post}) {
const [like, setLike] = useState(post.like);
const [isLiked, setIsLiked] = useState(false);
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

const handleLike=()=>{
    setLike(isLiked? like-1: like+1);
    setIsLiked(!isLiked)
}
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img  className="postProfileImg" src={Users.filter((u)=>u.id === post?.userId)[0].profilePicture} alt=""  />
                     <span className="postUsername">{Users.filter((u)=>u.id === post?.userId)[0].username}</span>
                     <span className="postDate">{post.date}</span>
                </div>
                
                <div className="postTopRight">
                <MoreVertIcon/></div>
            </div>
            <div className="postMid">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={PF+post.photo} alt=""  />
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
