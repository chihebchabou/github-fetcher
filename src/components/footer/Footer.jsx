import { FaSearch } from "react-icons/fa";
import "./Footer.css";
import Button from "../ui/button/Button";

const Footer = ({ onChangeView }) => {
  const handleOnClick = () => onChangeView("search");
  return (
    <footer className="footer">
      <h2>Prêt à explorer ?</h2>
      <p>
        Commencez votre recherche et découvrez les profils qui vous intéressent.
      </p>

      <Button variant="default" size="base" onClick={handleOnClick}>
        <FaSearch className="pr-1" size={20} /> Lancer la recherche
      </Button>
    </footer>
  );
};

export default Footer;
