import { useEffect, useState } from "react";
import Search from "../components/search/Search";
import { fetchUsers } from "../services/github";
import Users from "../components/users/Users";

const SearchView = ({ onChangeView }) => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleOnChange = (e) => setQuery(e.target.value);

  useEffect(() => {
    const callAPI = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await fetchUsers(query);
        setUsers(data.items);
      } catch (err) {
        setError(err instanceof Error && err.message);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(() => {
      if (query) callAPI();
      else {
        setUsers([]);
        setLoading(false);
        setError("");
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <>
      {/* Search Section */}
      <Search
        value={query}
        onChange={handleOnChange}
        onChangeView={onChangeView}
      />
      {/* Users Section */}
      <Users
        users={users}
        loading={loading}
        error={error}
        onChangeView={onChangeView}
      />
    </>
  );
};

export default SearchView;
