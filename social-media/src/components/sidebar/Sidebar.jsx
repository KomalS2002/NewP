import "./sidebar.css";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpIcon from '@mui/icons-material/Help';
import WorkIcon from '@mui/icons-material/Work';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import SchoolIcon from '@mui/icons-material/School';

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeedIcon className="sidebarListIcon"/>
                    <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <ChatIcon className="sidebarListIcon"/>
                    <span className="sidebarListItemText">Chats</span>
                </li>
                <li className="sidebarListItem">
                    <PlayCircleFilledIcon className="sidebarListIcon"/>
                    <span className="sidebarListItemText">Videos</span>
                </li>
                <li className="sidebarListItem">
                    <GroupsIcon className="sidebarListIcon"/>
                    <span className="sidebarListItemText">Groups</span>
                </li>
                <li className="sidebarListItem">
                    <BookmarkIcon className="sidebarListIcon"/>
                    <span className="sidebarListItemText">Bookmarks</span>
                </li>
                <li className="sidebarListItem">
                    <HelpIcon className="sidebarListIcon"/>
                    <span className="sidebarListItemText">Questions</span>
                </li>
                <li className="sidebarListItem">
                    <WorkIcon className="sidebarListIcon"/>
                    <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                    <InsertInvitationIcon className="sidebarListIcon"/>
                    <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                    <SchoolIcon className="sidebarListIcon"/>
                    <span className="sidebarListItemText">Jobs</span>
                </li>
            </ul>
            <button className="sidebarButton">Show more</button>
            <hr className="sidebarHr"/>
            <ul className="sidebarFriendsList">
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/6628908.jpg" alt="" />
                    <span className="sidebarFriendName">Koko</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/6628908.jpg" alt="" />
                    <span className="sidebarFriendName">Koko</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/6628908.jpg" alt="" />
                    <span className="sidebarFriendName">Koko</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/6628908.jpg" alt="" />
                    <span className="sidebarFriendName">Koko</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/6628908.jpg" alt="" />
                    <span className="sidebarFriendName">Koko</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/6628908.jpg" alt="" />
                    <span className="sidebarFriendName">Koko</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/6628908.jpg" alt="" />
                    <span className="sidebarFriendName">Koko</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/6628908.jpg" alt="" />
                    <span className="sidebarFriendName">Koko</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/6628908.jpg" alt="" />
                    <span className="sidebarFriendName">Koko</span>
                </li>
                <li className="sidebarFriend">
                    <img className="sidebarFriendImg" src="/assets/6628908.jpg" alt="" />
                    <span className="sidebarFriendName">Koko</span>
                </li>

            </ul>
        </div>
    </div>
  )
}
