import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
		<Topbar/>
		<div className="profile">
		<Sidebar/>
    <div className="profileRight">
      <div className="profileRightTop">
        <div className="profileCover">
        <img className="profileCoverImg" src="assets/post/3.jpeg" alt="" />
        <img className="profileUserImg" src="assets/person/11.jpg" alt="" />
        </div>
        <div className="profileInfo">
          <h4 className="profileInfoName">Ahmed Saad</h4>
          <span className="profileInfoDesc">Wellcome To My Page!</span>
        </div>
      </div>
      <div className="profileRightBotom">
		<Feed/>
		<Rightbar profile/>
    </div>
    </div>
		</div>
		</>
  )
}
