import "./Search.css";
import Button from "../ui/button/Button";
import { useViews } from "../../context/views/ViewsContext";
import { useUsers } from "../../context/users/UsersContext";

const Search = () => {
  const { query, handleOnChange, handleClearUsers } = useUsers();
  const { handleOnChangeView } = useViews();
  const handleOnClick = () => {
    handleOnChangeView("main");
    handleClearUsers();
  };

  return (
    <section className="search">
      <input
        type="search"
        placeholder="ex:mojombo"
        value={query}
        onChange={handleOnChange}
      />
      <Button variant="danger" size="base" onClick={handleOnClick}>
        annuler
      </Button>
    </section>
  );
};

export default Search;
