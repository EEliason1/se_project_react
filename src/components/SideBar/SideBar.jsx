import avatar from "../../assets/sample-avatar.svg";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <img src={avatar} alt="" className="sidebar__avatar" />
      <p className="sidebar__name">Evan Eliason</p>
    </div>
  );
}
