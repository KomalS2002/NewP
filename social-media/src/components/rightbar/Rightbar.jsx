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
      </div>
    </div>
  )
}
