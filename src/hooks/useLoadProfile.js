import { useEffect, useState } from "react";
import { useViews } from "../context/views/ViewsContext";
import { fetchUserProfile, fetchUserRepos } from "../services/github";

export const useLoadProfile = () => {
  const { selectedUser } = useViews();
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
          fetchUserProfile(selectedUser.login),
          fetchUserRepos(selectedUser.login),
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
  }, [selectedUser.login]);

  return { profile, repos, totalStars, loading, error };
};
