import "./Search.css";
import Button from "../ui/button/Button";

const Search = ({ onChangeView }) => {
  const handleOnClick = () => onChangeView("main");
  return (
    <section className="search">
      <input type="search" placeholder="ex:mojombo" />
      <Button variant="danger" size="base" onClick={handleOnClick}>
        annuler
      </Button>
    </section>
  );
};

export default Search;
