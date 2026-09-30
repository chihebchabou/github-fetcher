import "./Users.css";
import UserCard from "./UserCard";
import { useUsers } from "../../context/users/UsersContext";

const Users = () => {
  const { loading, error, users } = useUsers();
  return (
    <section className="users">
      {loading ? (
        <p className="text-gray-400">Rechercher...</p>
      ) : error ? (
        <p className="text-red-800">{error}</p>
      ) : users.length > 0 ? (
        users.map((user) => <UserCard key={user.id} user={user} />)
      ) : (
        <p className="text-gray-400">Les résultats seront affichés ici</p>
      )}
    </section>
  );
};

export default Users;
