import "./upperbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Upperbar = () => {
const {user} = useContext(AuthContext);
const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="upperbar">
      <div className="upperbarLeft">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">Social-Media</span>
        </Link>
        
      </div>
      <div className="upperbarMiddle">
        <div className="searchbar">
          <SearchIcon/>
        <input type="text" className="searchInput" placeholder="search friends and posts" />
        </div>
      </div>
      <div className="upperbarRight">
        <div className="upperbarLinks">
          <div className="link">Home</div>
          <div className="link">Timeline</div>
        </div>
        <div className="upperbarIcons">
          <div className="upperbarIconItem">
          <PersonIcon/>
          <span className="counter">1</span>
          </div>

          <div className="upperbarIconItem">
          <ChatIcon/>
          <span className="counter">1</span>
          </div>

          <div className="upperbarIconItem">
          <NotificationsIcon/>
          <span className="counter">1</span>
          </div>
          
        </div>
        <Link to={`/profile/${user.username}`}>
        <img className= "upperbarImage" src={user.profilePicture ? PF+user.profilePicture: PF+"user.png"} alt="" />
        </Link>
      </div>
    </div>
  )
}

export default Upperbar