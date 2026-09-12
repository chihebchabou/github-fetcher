import "./Search.css";
import Button from "../ui/button/Button";

const Search = ({ value, onChange, onChangeView }) => {
  const handleOnClick = () => onChangeView("main");
  return (
    <section className="search">
      <input
        type="search"
        placeholder="ex:mojombo"
        value={value}
        onChange={onChange}
      />
      <Button variant="danger" size="base" onClick={handleOnClick}>
        annuler
      </Button>
    </section>
  );
};

export default Search;
