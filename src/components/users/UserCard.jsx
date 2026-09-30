import { useViews } from "../../context/views/ViewsContext";
import Button from "../ui/button/Button";
import "./UserCard.css";

const UserCard = ({ user }) => {
  const { handleOnChangeView } = useViews();
  const handleOnClick = () => handleOnChangeView("profile", user);
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={`Avatar de ${user.login}`} />
      <h2>{user.login}</h2>
      <Button variant="primary" size="base" onClick={handleOnClick}>
        Voir le profil
      </Button>
    </div>
  );
};

export default UserCard;
