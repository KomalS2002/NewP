import "./share.css";
import PermMediaIcon from '@mui/icons-material/PermMedia';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import {AuthContext} from "../../context/AuthContext"
import { useContext } from "react";

export default function Share() {
const {user} = useContext(AuthContext);
const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="share">
        <div className="shareWrapper">
        <div className="shareTop">
            <img src={user.profilePicture ? PF+user.profilePicture : PF+"user.png"} alt="" className="shareProfileImg" />
            <input className="shareInput" type="text" placeholder={"What's on your mind " + user.username +"? Tell us!"}/>
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
            <button className="shareButton">Share</button>
        </div>
        </div>
    </div>
  )
}
