import "./rightbar.css";
import CakeIcon from '@mui/icons-material/Cake';
import Online from "../online/Online";
import {Users} from "../../dummyData.js"

export default function Rightbar({profile}) {

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
    <p className="rightbarTitle">User Information</p>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">City:</span>
        <span className="rightbarInfoValue">Jaipur</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">From:</span>
        <span className="rightbarInfoValue">Japan</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Status:</span>
        <span className="rightbarInfoValue">Single</span>
      </div>
      
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="/assets/friend.png" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Devi Prasad</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assets/friend.png" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Devi Prasad</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assets/friend.png" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Devi Prasad</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assets/friend.png" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Devi Prasad</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assets/friend.png" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Devi Prasad</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assets/friend.png" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Devi Prasad</span>
        </div>
      </div>
    </>
  )
}
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <ProfileRightbar/>
        {/* <HomeRightbar/> */}
      </div>
    </div>
  )
}
