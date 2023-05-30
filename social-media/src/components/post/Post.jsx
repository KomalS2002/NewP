import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/6628908.jpg" alt="" className="postProfileImg" />
                     <span className="postUsername">Koko</span>
                     <span className="postDate">10 mins ago</span>
                </div>
                
                <div className="postTopRight">
                <MoreVertIcon/></div>
            </div>
            <div className="postMid">
                <span className="postText">let's see how the another world looks like.</span>
                <img className="postImg" src="/assets/Cosmic design to inspire your next stellar project.jpeg" alt=""  />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <ThumbUpIcon className="likeIcon" htmlColor="#3944bc"/>
                <FavoriteIcon className="likeIcon" htmlColor="#ca3433"/>
                <span className="postLikeCounter">15 people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">4 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
