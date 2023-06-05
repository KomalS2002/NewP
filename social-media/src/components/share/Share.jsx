import "./share.css";
import PermMediaIcon from '@mui/icons-material/PermMedia';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import {AuthContext} from "../../context/AuthContext"
import { useContext, useRef, useState } from "react";
import axios from "axios";

export default function Share() {
const {user} = useContext(AuthContext);
const PF = process.env.REACT_APP_PUBLIC_FOLDER;
const desc = useRef();
const [file, setFile] = useState(null);

const submitHandler = async(e)=>{
e.preventDefault();
const newPost = {
userId:user._id,
desc:desc.current.value 
}
if(file){
    const data = new FormData();
    const fileName = Date.now() +file.name;
    data.append("file", file);
    data.append("name",fileName);
    newPost.img = fileName;
    try{
    await axios.post("/upload", data);
    }catch(err){
        console.log(err);
    }
};
try{
await axios.post("/posts", newPost);
window.location.reload();
}catch(err){
    console.log(err);
}

}
  return (
    <div className="share">
        <div className="shareWrapper">
        <div className="shareTop">
            <img src={user.profilePicture ? PF+user.profilePicture : PF+"user.png"} alt="" className="shareProfileImg" />
            <input className="shareInput" 
            type="text" 
            placeholder={"What's on your mind " + user.username +"? Tell us!"}
            ref={desc}
            />
        </div>
        <hr className="shareHr"/>
        <form className="shareBottom" onSubmit={submitHandler}>
            <div className="shareOptions">
                <label htmlFor="file" className="shareOption">
                    <PermMediaIcon htmlColor="purple" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Videos</span>
                    <input 
                    style={{display:"none"}} 
                    type="file" id="file"  
                    accept=".png,.jpg,.jpeg"
                    onChange={(e)=>setFile(e.target.files[0])}
                    />
                </label>
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
            <button className="shareButton" type="submit">Share</button>
        </form>
        </div>
    </div>
  )
}
