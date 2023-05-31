import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Users} from "../../dummyData.js"

export default function Post({post}) {

  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/6628908.jpg" alt="" className="postProfileImg" />
                     <span className="postUsername">Koko</span>
                     <span className="postDate">{post.date}</span>
                </div>
                
                <div className="postTopRight">
                <MoreVertIcon/></div>
            </div>
            <div className="postMid">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={post.photo} alt=""  />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <ThumbUpIcon className="likeIcon" htmlColor="#3944bc"/>
                <FavoriteIcon className="likeIcon" htmlColor="#ca3433"/>
                <span className="postLikeCounter">{post.like}people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
