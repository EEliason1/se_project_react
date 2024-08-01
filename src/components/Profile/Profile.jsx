import "./Profile.css";
import SideBar from "../SideBar/SideBar.jsx";
import ClothesSection from "../ClothesSection/ClothesSection.jsx";

export default function Profile({
  handleAddClick,
  onCardClick,
  clothingItems,
  handleLogOutClick,
  handleProfileEditClick,
}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar
          handleProfileEditClick={handleProfileEditClick}
          handleLogOutClick={handleLogOutClick}
        />
      </section>
      <section className="profile__clothes-section">
        <ClothesSection
          handleAddClick={handleAddClick}
          onCardClick={onCardClick}
          clothingItems={clothingItems}
        />
      </section>
    </div>
  );
}
