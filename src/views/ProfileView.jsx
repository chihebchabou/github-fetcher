import Profile from "../components/profile/Profile";
import Repos from "../components/repos/Repos";
import { useLoadProfile } from "../hooks/useLoadProfile";

const ProfileView = () => {
  const { profile, repos, totalStars, loading, error } = useLoadProfile();

  if (loading)
    return (
      <p className="text-center text-gray-400 mt-10">Chargement du profil...</p>
    );

  if (error) return <p className="text-center text-red-800 mt-10">{error}</p>;

  return (
    <>
      {/* Profile Section */}
      {profile && <Profile user={profile} totalStars={totalStars} />}

      {/* Repos Section */}
      <Repos repos={repos} />
    </>
  );
};

export default ProfileView;
