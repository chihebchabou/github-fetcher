import RepoCard from "./RepoCard";
import "./Repos.css";

const Repos = ({ repos }) => {
  if (repos.length === 0)
    return (
      <p className="text-center text-gray-400 my-10">Aucun dépôt trouvé</p>
    );

  return (
    <section className="repos">
      <h2 className="repos__title">Dépôt:</h2>
      <div className="repos__grid">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </section>
  );
};

export default Repos;
