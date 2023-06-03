import "./upperbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from "react-router-dom";

const upperbar = () => {
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
        <img className= "upperbarImage" src="/assets/Soul.jpeg" alt="" />
      </div>
    </div>
  )
}

export default upperbar