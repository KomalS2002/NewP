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
  return (<h1>Hey, it's profile page</h1>)
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
