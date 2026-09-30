import { useEffect, useState } from "react";
import { UsersContext } from "./UsersContext";
import { fetchUsers } from "../../services/github";

export const UsersProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleOnChange = (e) => setQuery(e.target.value);
  const handleClearUsers = () => setUsers([]);

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
    <UsersContext.Provider
      value={{ users, loading, error, handleOnChange, handleClearUsers }}
    >
      {children}
    </UsersContext.Provider>
  );
};
