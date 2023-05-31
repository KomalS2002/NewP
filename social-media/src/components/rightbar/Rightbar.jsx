import "./rightbar.css";
import CakeIcon from '@mui/icons-material/Cake';

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <CakeIcon className="birthdayImg"/>
          <span className="birthdayText"><b>Kelly</b> and <b>3 other</b> friends have their birthday today</span>
        </div>
      <img src="/assets/ad.png" alt="" className="rightbarAd" />
      <h4 className="rightbarTitle">Online friends</h4>
      <ul className="rightbarFriendList">
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src="/assets/friend.png" alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Devi Prasad</span>
        </li>
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src="/assets/friend.png" alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Devi Prasad</span>
        </li>
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src="/assets/friend.png" alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Devi Prasad</span>
        </li>
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src="/assets/friend.png" alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Devi Prasad</span>
        </li>
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src="/assets/friend.png" alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Devi Prasad</span>
        </li>
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src="/assets/friend.png" alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Devi Prasad</span>
        </li>
      </ul>
      </div>
    </div>
  )
}
