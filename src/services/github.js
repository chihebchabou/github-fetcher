const API_BASE = "https://api.github.com";

const handleResponse = async (uri, errMessage) => {
  const res = await fetch(uri);
  if (!res.ok) {
    if (res.status === 403) {
      throw new Error(
        "Limite de requêtes Github atteinte - veuillez réessayer dans une minute.",
      );
    }
    throw new Error(errMessage);
  }
  return await res.json();
};

export const fetchUsers = async (query) => {
  const uri = `${API_BASE}/search/users?q=${query}`;
  return handleResponse(uri, "Impossible de récupérer les utilisateurs");
};

export const fetchUserProfile = async (username) => {
  const uri = `${API_BASE}/users/${username}`;
  return handleResponse(uri, "Impossible de récupérer le profile utilisateur");
};

export const fetchUserRepos = async (username) => {
  const uri = `${API_BASE}/users/${username}/repos`;
  return handleResponse(
    uri,
    "Impossible de récupérer les dépots de l'utilisateur",
  );
};
