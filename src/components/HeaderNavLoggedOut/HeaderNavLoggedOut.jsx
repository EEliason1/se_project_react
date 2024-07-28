import "./HeaderNavLoggedOut.css";

const HeaderNavLoggedOut = ({handleSignUpClick, handleLoginClick}) => {
  return (
    <div className="header header_logged-out">
      <button
        className="header__user-action-button"
        type="button"
        onClick={handleSignUpClick}
      >
        Sign Up
      </button>
      <button
        className="header__user-action-button"
        type="button"
        onClick={handleLoginClick}
      >
        Log In
      </button>
    </div>
  );
};

export default HeaderNavLoggedOut;
