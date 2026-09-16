import "./Profile.css";
import ProfileHeader from "./ProfileHeader";

const Profile = ({ user, totalStars, onChangeView }) => {
  const stats = [
    { label: "Abonnés", value: user.followers },
    { label: "Abonnements", value: user.following },
    { label: "Dépôts publics", value: user.public_repos },
    { label: "Total d'étoiles", value: totalStars },
  ];
  return (
    <>
      <ProfileHeader user={user} onChangeView={onChangeView} />

      <section className="profile">
        {stats.map((stat) => (
          <div key={stat.label} className="profile__stat">
            <span className="profile__stat-value">{stat.value}</span>
            <span className="profile__stat-label">{stat.label}</span>
          </div>
        ))}
      </section>
    </>
  );
};

export default Profile;
