import "./rightbar.css";
import CakeIcon from '@mui/icons-material/Cake';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveAlt1Icon from '@mui/icons-material/PersonRemoveAlt1';
import Online from "../online/Online";
import {Users} from "../../dummyData.js"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export default function Rightbar({ user }) {
const PF = process.env.REACT_APP_PUBLIC_FOLDER;
const { user: currentUser, dispatch } = useContext(AuthContext);
const [friends, setFriends] = useState([]);
const [followed, setFollowed] = useState(currentUser.following.includes(user?.id));

useEffect(()=>{
  setFollowed(currentUser.following.includes(user?.id))
},[currentUser, user]);

//fetching friends
useEffect(()=>{
  const getFriends = async()=>{
  try{
  const friendList = await axios.get("/users/friends/" + user._id);
  setFriends(friendList.data);
  }catch(err){console.log(err)}
  };
  getFriends();
}, [user]);

//follow unfollow any user
const handleFollow=async()=>{
  try{
  if(followed){
    await axios.put("/users/"+user._id+"/unfollow",{userId : currentUser._id});
    dispatch({type:"UNFOLLOW", payload:user._id});
  }
  else{
    await axios.put("/users/"+user._id+"/follow",{userId : currentUser._id});
    dispatch({type:"FOLLOW", payload:user._id});
  }
  }catch(err){
    console.log(err);
  }
  setFollowed(!followed)
}

const HomeRightbar =()=>{
  return (
    <>
    <div className="birthdayContainer">
    <CakeIcon className="birthdayImg"/>
    <span className="birthdayText"><b>Kelly</b> and <b>3 other</b> friends have their birthday today</span>
  </div>
<img src="/assets/ad.png" alt="" className="rightbarAd" />
<h4 className="rightbarTitle">Online friends</h4>
<ul className="rightbarFriendList">
{Users.map((u)=>(
  <Online key={u.id} user={u}/>
))}
</ul>
</>
  );
};

const ProfileRightbar =()=>{
  return (
    <>
    {user.username !== currentUser.username && (
      <button className="rightbarFollowButton" 
        onClick={handleFollow}>
        {followed ? "Unfollow" :"Follow"}
        { followed ? <PersonRemoveAlt1Icon/> : <PersonAddIcon/>}
        </button>
    )}
    <p className="rightbarTitle">User Information</p>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">City:</span>
        <span className="rightbarInfoValue">{user.city}</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">From:</span>
        <span className="rightbarInfoValue">{user.from}</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Status:</span>
        <span className="rightbarInfoValue">{user.relationship ===1 ? "Single" : user.relationship ===2 ? "Married" :"."}</span>
      </div>
      
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        {friends.map((friend)=>(
          <Link to={"/profile/"+friend.username} style={{textDecoration:"none"}}>
          <div className="rightbarFollowing">
          <img src={friend.profilePicture ? PF+friend.profilePicture : PF+"user.png" } alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">{friend.username}</span>
        </div>
        </Link>
          ))}
      </div>
    </>
  )
}
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user? <ProfileRightbar/>: <HomeRightbar/>}
        
      </div>
    </div>
  )
}
