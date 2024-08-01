import avatar from "../../assets/sample-avatar.svg";
import "./SideBar.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function SideBar({ handleProfileEditClick, handleLogOutClick }) {
  const currentUser = useContext(CurrentUserContext);
  const currentName = currentUser ? currentUser.name : "Undefined";
  const currentAvatar = currentUser ? currentUser.avatar : avatar;

  return (
    <div className="sidebar">
      <div className="sidebar__user-info">
        <img src={currentAvatar} alt="avatar" className="sidebar__avatar" />
        <p className="sidebar__name">{currentName}</p>
      </div>
      <div className="sidebar__buttons">
        <button
          className="sidebar__button"
          type="button"
          onClick={handleProfileEditClick}
        >
          Change profile data
        </button>
        <button
          className="sidebar__button"
          type="button"
          onClick={handleLogOutClick}
        >
          Log out
        </button>
      </div>
    </div>
  );
}
