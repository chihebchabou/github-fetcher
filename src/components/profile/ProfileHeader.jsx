import {
  FaArrowLeft,
  FaBuilding,
  FaGithub,
  FaLink,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./ProfileHeader.css";
import { useViews } from "../../context/views/ViewsContext";

const formatUrl = (url) =>
  url && !/^https?:\/\//i.test(url) ? `https://${url}` : url;

const ProfileHeader = ({ user }) => {
  const blogUrl = formatUrl(user.blog);
  const { handleOnChangeView } = useViews();
  const handleOnClick = () => handleOnChangeView("search");
  return (
    <section className="profile-header">
      <button
        type="button"
        className="profile-header__back"
        onClick={handleOnClick}
      >
        <FaArrowLeft size={14} />
        Retour aux résultats
      </button>

      <img src={user.avatar_url} alt={`Avatar de ${user.login}`} />

      <h2>{user.name || user.login}</h2>
      <p className="profile-header__login">@{user.login}</p>
      <div className="profile-header__meta">
        {user.location && (
          <span>
            <FaMapMarkerAlt className="text-gray-500" />
            {user.location}
          </span>
        )}
        {user.company && (
          <span>
            <FaBuilding className="text-gray-500" />
            {user.company}
          </span>
        )}
        {user.blog && (
          <a href={blogUrl} target="_blank" rel="noreferrer">
            <FaLink />
            {user.blog}
          </a>
        )}
      </div>
      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
        className="button button--default button--base"
      >
        <FaGithub size={18} className="pr-1" />
        Voir sur Github
      </a>
    </section>
  );
};

export default ProfileHeader;
