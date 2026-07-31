import { FaGithub } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <FaGithub style={{ color: "#99a1af", fontSize: 200, paddingBlock: 12 }} />
      <h1>Trouvez n'importe quel profil GitHub en un instant</h1>
      <p>
        Github Fetcher vous permet de rechercher des utilisateurs GitHub,
        d'afficher leurs statistiques publiques et d'explorer leurs informations
        de profil en toute simplicité.
      </p>
    </header>
  );
};

export default Header;
