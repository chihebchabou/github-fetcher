import { FaCodeBranch, FaStar } from "react-icons/fa";
import "./RepoCard.css";

const RepoCard = ({ repo }) => {
  return (
    <article className="repo-card">
      <h3 className="repo-card__name">
        <a href={repo.html_url} target="_blank" rel="noreferrer">
          {repo.name}
        </a>
      </h3>
      {repo.description && (
        <p className="repo-card__description">{repo.description}</p>
      )}
      <div className="repo-card__meta">
        {repo.language && (
          <span className="repo-card__language">{repo.language}</span>
        )}
        <span className="repo-card__count">
          <FaStar size={12} />
          {repo.stargazers_count}
        </span>
        <span className="repo-card__count">
          <FaCodeBranch size={12} />
          {repo.forks_count}
        </span>
      </div>
    </article>
  );
};

export default RepoCard;
