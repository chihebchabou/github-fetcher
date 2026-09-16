import { useEffect, useState } from "react";
import { fetchUserProfile, fetchUserRepos } from "../services/github";
import Profile from "../components/profile/Profile";
import Repos from "../components/repos/Repos";

const ProfileView = ({ user, onChangeView }) => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [totalStars, setTotalStars] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProfile = async () => {
      setLoading(true);
      setError("");

      try {
        const [profilEData, reposData] = await Promise.all([
          fetchUserProfile(user.login),
          fetchUserRepos(user.login),
        ]);
        setProfile(profilEData);
        setRepos(reposData);
        setTotalStars(
          reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0),
        );
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Une erreur est survenue",
        );
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [user.login]);

  if (loading)
    return (
      <p className="text-center text-gray-400 mt-10">Chargement du profil...</p>
    );

  if (error) return <p className="text-center text-red-800 mt-10">{error}</p>;

  return (
    <>
      {/* Profile Section */}
      {profile && (
        <Profile
          user={profile}
          totalStars={totalStars}
          onChangeView={onChangeView}
        />
      )}

      {/* Repos Section */}
      <Repos repos={repos} />
    </>
  );
};

export default ProfileView;
