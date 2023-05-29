import "./share.css";
import PermMediaIcon from '@mui/icons-material/PermMedia';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
        <div className="shareTop">
            <img src="/assets/Soul.jpeg" alt="" className="shareProfileImg" />
            <input className="shareInput" type="text" placeholder="What's on your mind ? Tell us!"/>
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMediaIcon htmlColor="purple" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Videos</span>
                </div>
                <div className="shareOption">
                    <BookmarkIcon htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <LocationOnIcon htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <InsertEmoticonIcon htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
