import React, { useEffect, useState } from 'react'
import Upperbar from '../../components/upperbar/Upperbar.jsx';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import Feed from '../../components/feed/Feed.jsx';
import Rightbar from '../../components/rightbar/Rightbar.jsx';
import "./profile.css"
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;
  useEffect(()=>{ 
    const fetchUsers = async()=>{
    const res = await axios.get(`/users?username=${username}`);
    // console.log(res);
    setUser(res.data);
    };
    fetchUsers();
  },[username])

  

  return (
    <div><Upperbar/>
    <div className="profile">
    <Sidebar/>
    <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
                <img src={user.coverPicture || PF+"cover.jpeg"} alt="" className="profileCoverImg" />
                <img src={user.profilePicture || PF+"user.png"} alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
                <span className="profileName">{user.username}</span>
                <span className="profileDesc">{user.desc}</span>
            </div>
        </div>
        <div className="profileRightBottom">
    <Feed username={username}/>
    <Rightbar user ={user}/>
       </div>
    </div>
    </div>

    </div>
  )
}
