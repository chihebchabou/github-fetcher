import "./Users.css";
import UserCard from "./UserCard";

const Users = ({ users, loading, error, onChangeView }) => {
  return (
    <section className="users">
      {loading ? (
        <p className="text-gray-400">Rechercher...</p>
      ) : error ? (
        <p className="text-red-800">{error}</p>
      ) : users.length > 0 ? (
        users.map((user) => (
          <UserCard key={user.id} user={user} onChangeView={onChangeView} />
        ))
      ) : (
        <p className="text-gray-400">Les résultats seront affichés ici</p>
      )}
    </section>
  );
};

export default Users;
