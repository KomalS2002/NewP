import React from 'react'
import Upperbar from '../../components/upperbar/Upperbar.jsx';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import Feed from '../../components/feed/Feed.jsx';
import Rightbar from '../../components/rightbar/Rightbar.jsx';
import "./profile.css"

export default function Profile() {
  return (
    <div><Upperbar/>
    <div className="profile">
    <Sidebar/>
    <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
                <img src="/assets/cover.jpeg" alt="" className="profileCoverImg" />
                <img src="/assets/displayP.jpeg" alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
                <span className="profileName">Koko</span>
                <span className="profileDesc">Hello! I am Koko</span>
            </div>
        </div>
        <div className="profileRightBottom">
    <Feed/>
    <Rightbar profile/>
       </div>
    </div>
    </div>

    </div>
  )
}
